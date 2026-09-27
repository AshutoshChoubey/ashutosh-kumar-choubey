import { Injectable, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  AboutContent,
  CertificationsContent,
  ContentCreationContent,
  EducationContent,
  ExperienceContent,
  ExperienceSubProject,
  HeroContent,
  SkillsContent
} from '../../shared/models/profile.model';

export interface ResumeExportData {
  hero: HeroContent;
  about: AboutContent;
  skills: SkillsContent;
  experience: ExperienceContent;
  contentCreation: ContentCreationContent;
  education: EducationContent;
  certifications: CertificationsContent;
}

@Injectable({
  providedIn: 'root'
})
export class ResumeExportService {
  private readonly platformId = inject(PLATFORM_ID);

  readonly isGeneratingPdf = signal<boolean>(false);
  readonly isGeneratingDoc = signal<boolean>(false);

  /**
   * Generates and downloads a high-fidelity, structured, vector-linked PDF file.
   * Uses high-DPI canvas capture with smart section-aware pagination to ensure
   * zero text clipping across page boundaries, preserved color accents, and clickable links.
   */
  async downloadPdf(resumeElement: HTMLElement, fileName = 'Ashutosh_Kumar_Choubey_Resume.pdf'): Promise<void> {
    if (!isPlatformBrowser(this.platformId) || !resumeElement) {
      return;
    }

    this.isGeneratingPdf.set(true);

    try {
      // Dynamic imports to keep initial bundle size lean and SSR-safe
      const [{ jsPDF }, html2canvasModule] = await Promise.all([
        import('jspdf'),
        import('html2canvas')
      ]);
      const html2canvas = html2canvasModule.default;

      // 1. High-resolution canvas rendering
      const canvas = await html2canvas(resumeElement, {
        scale: 2, // Retina 2x crispness
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false
      });

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      const pageWidthMm = 210;
      const pageHeightMm = 297;
      const marginMm = 10;
      const printWidthMm = pageWidthMm - marginMm * 2; // 190mm
      const printHeightMm = pageHeightMm - marginMm * 2; // 277mm

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const idealPageHeightPx = Math.floor(canvasWidth * (printHeightMm / printWidthMm));

      // 2. Identify candidate break boundaries (never slice through atomic blocks)
      const elementRect = resumeElement.getBoundingClientRect();
      const scaleY = canvasHeight / elementRect.height;
      const scaleX = canvasWidth / elementRect.width;

      const atomicSelectors = [
        '.resume-header',
        '.resume-section',
        '.experience-block',
        '.subproject-item',
        '.subproject-block',
        '.content-block',
        '.education-block',
        '.cert-card',
        '.skill-category-card',
        'ul.ats-bullet-list > li'
      ];

      const blockElements = Array.from(resumeElement.querySelectorAll<HTMLElement>(atomicSelectors.join(',')));
      const boundaries: { top: number; bottom: number }[] = blockElements
        .map((el) => {
          const r = el.getBoundingClientRect();
          return {
            top: Math.floor((r.top - elementRect.top) * scaleY),
            bottom: Math.ceil((r.bottom - elementRect.top) * scaleY)
          };
        })
        .sort((a, b) => a.top - b.top);

      // 3. Compute smart page slices
      const pageSlices: { startY: number; height: number }[] = [];
      let currentY = 0;

      while (currentY < canvasHeight) {
        const potentialEnd = currentY + idealPageHeightPx;

        if (potentialEnd >= canvasHeight) {
          // Last page
          pageSlices.push({
            startY: currentY,
            height: canvasHeight - currentY
          });
          break;
        }

        // Find blocks that overlap potentialEnd
        let bestCut = potentialEnd;
        const overlappingBlock = boundaries.find(
          (b) => b.top < potentialEnd && b.bottom > potentialEnd
        );

        if (overlappingBlock) {
          // If cutting at potentialEnd would cut through this block,
          // move the cut to before this block (if it doesn't make the page too empty)
          const minAllowedPageHeight = idealPageHeightPx * 0.5;
          if (overlappingBlock.top - currentY >= minAllowedPageHeight) {
            bestCut = overlappingBlock.top;
          } else {
            // If the block itself is huge or starts too early, cut after it
            bestCut = Math.min(canvasHeight, overlappingBlock.bottom);
          }
        } else {
          // Find the nearest block top below potentialEnd - 150
          const candidates = boundaries.filter(
            (b) => b.top > currentY + idealPageHeightPx * 0.7 && b.top <= potentialEnd
          );
          if (candidates.length > 0) {
            bestCut = candidates[candidates.length - 1].top;
          }
        }

        // Ensure progress is made
        if (bestCut <= currentY + 100) {
          bestCut = potentialEnd;
        }

        pageSlices.push({
          startY: currentY,
          height: bestCut - currentY
        });

        currentY = bestCut;
      }

      // 4. Render slices to PDF pages
      for (let i = 0; i < pageSlices.length; i++) {
        const slice = pageSlices[i];
        const pageCanvas = document.createElement('canvas');
        pageCanvas.width = canvasWidth;
        pageCanvas.height = slice.height;

        const ctx = pageCanvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
          ctx.drawImage(
            canvas,
            0,
            slice.startY,
            canvasWidth,
            slice.height,
            0,
            0,
            canvasWidth,
            slice.height
          );
        }

        const sliceHeightMm = (slice.height / canvasWidth) * printWidthMm;
        const imgData = pageCanvas.toDataURL('image/jpeg', 0.96);

        if (i > 0) {
          pdf.addPage();
        }

        pdf.addImage(
          imgData,
          'JPEG',
          marginMm,
          marginMm,
          printWidthMm,
          sliceHeightMm,
          undefined,
          'FAST'
        );
      }

      // 5. Embed clickable hyperlinks for contact & verification links
      const linkElements = Array.from(resumeElement.querySelectorAll<HTMLAnchorElement>('a[href]'));
      for (const a of linkElements) {
        const href = a.href;
        if (!href || href.startsWith('javascript:')) continue;

        const linkRect = a.getBoundingClientRect();
        const topPx = (linkRect.top - elementRect.top) * scaleY;
        const bottomPx = (linkRect.bottom - elementRect.top) * scaleY;
        const leftPx = (linkRect.left - elementRect.left) * scaleX;
        const widthPx = linkRect.width * scaleX;
        const heightPx = linkRect.height * scaleY;

        // Find which page slice contains this link
        for (let pageIdx = 0; pageIdx < pageSlices.length; pageIdx++) {
          const slice = pageSlices[pageIdx];
          if (topPx >= slice.startY && topPx < slice.startY + slice.height) {
            const yInSlicePx = topPx - slice.startY;
            const xMm = marginMm + (leftPx / canvasWidth) * printWidthMm;
            const yMm = marginMm + (yInSlicePx / canvasWidth) * printWidthMm;
            const wMm = (widthPx / canvasWidth) * printWidthMm;
            const hMm = (heightPx / canvasWidth) * printWidthMm;

            pdf.setPage(pageIdx + 1);
            pdf.link(xMm, yMm, wMm, hMm, { url: href });
            break;
          }
        }
      }

      // 6. Direct file download
      pdf.save(fileName);
    } catch (err) {
      console.error('Failed to generate structured PDF:', err);
      // Graceful fallback to print
      window.print();
    } finally {
      this.isGeneratingPdf.set(false);
    }
  }

  /**
   * Generates and downloads an ATS-compliant, well-styled Microsoft Word (.doc) document.
   * Formatted with MSO Word XML namespaces, page setup, tables, fonts, and hyperlinks.
   */
  downloadDoc(data: ResumeExportData, fileName = 'Ashutosh_Kumar_Choubey_Resume.doc'): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.isGeneratingDoc.set(true);

    try {
      const htmlContent = this.buildWordDocumentHtml(data);
      const blob = new Blob(['\ufeff' + htmlContent], {
        type: 'application/msword;charset=utf-8'
      });

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to generate Word document:', err);
    } finally {
      this.isGeneratingDoc.set(false);
    }
  }

  /**
   * Triggers the native browser print dialog with print-optimized stylesheets.
   */
  print(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.print();
    }
  }

  /**
   * Constructs fully compliant Word HTML/XML document with MSO styling.
   */
  private buildWordDocumentHtml(data: ResumeExportData): string {
    const { hero, about, skills, experience, contentCreation, education, certifications } = data;

    // Build skill category rows
    const skillsHtml = (skills?.categories || [])
      .map(
        (cat) => `
        <tr>
          <td style="width: 180pt; font-weight: bold; color: #1e3a8a; padding: 3pt 0; vertical-align: top; font-size: 9.5pt;">
            ${cat.name}
          </td>
          <td style="color: #334155; padding: 3pt 0; vertical-align: top; font-size: 9.5pt;">
            ${cat.tags}
          </td>
        </tr>`
      )
      .join('');

    // Build work experience entries
    const experienceHtml = (experience?.items || [])
      .map((item) => {
        const subprojects = (item.subProjects || [])
          .map(
            (sp: ExperienceSubProject) => `
            <div style="margin: 6pt 0 4pt 0; padding-left: 8pt; border-left: 2pt solid #bfdbfe;">
              <span style="font-weight: bold; color: #0a2540; font-size: 9.5pt;">Project: ${sp.project || ''}</span>
              ${sp.client ? `<span style="color: #64748b; font-size: 9pt;"> (Client: ${sp.client})</span>` : ''}
              <ul style="margin: 3pt 0 4pt 16pt; padding: 0;">
                ${(sp.bullets || []).map((b: string) => `<li style="margin-bottom: 2pt; font-size: 9.5pt; color: #334155;">${b}</li>`).join('')}
              </ul>
              ${
                sp.technologies && sp.technologies.length > 0
                  ? `<div style="font-size: 8.5pt; color: #1e3a8a; margin-top: 2pt;"><strong>Tech:</strong> ${sp.technologies.join(', ')}</div>`
                  : ''
              }
            </div>`
          )
          .join('');

        const generalBullets = (item.bullets || [])
          .map((b: string) => `<li style="margin-bottom: 2pt; font-size: 9.5pt; color: #334155;">${b}</li>`)
          .join('');

        const techRow =
          item.technologies && item.technologies.length > 0
            ? `<div style="font-size: 8.5pt; color: #1e3a8a; margin-top: 3pt;"><strong>Key Stack:</strong> ${item.technologies.join(', ')}</div>`
            : '';

        return `
        <div style="margin-bottom: 12pt; page-break-inside: avoid;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 2pt;">
            <tr>
              <td style="font-size: 11pt; font-weight: bold; color: #0a2540;">
                ${item.company} ${item.location ? `<span style="font-weight: normal; color: #64748b; font-size: 9.5pt;">• ${item.location}</span>` : ''}
              </td>
              <td style="text-align: right; font-size: 9.5pt; font-weight: bold; color: #1e3a8a;">
                ${item.startDate} – ${item.current ? 'Present' : item.endDate || ''}
              </td>
            </tr>
          </table>
          <div style="font-size: 10pt; font-weight: bold; color: #2563eb; margin-bottom: 3pt;">
            ${item.role}
          </div>
          ${item.roleProjectText ? `<div style="font-size: 9.5pt; font-weight: 600; color: #475569; margin-bottom: 3pt;">${item.roleProjectText}</div>` : ''}
          ${generalBullets ? `<ul style="margin: 3pt 0 4pt 16pt; padding: 0;">${generalBullets}</ul>` : ''}
          ${subprojects}
          ${techRow}
        </div>`;
      })
      .join('');

    // Build YouTube / Content entries
    const contentHtml = (contentCreation?.items || [])
      .map(
        (c) => `
        <div style="margin-bottom: 10pt; page-break-inside: avoid;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 2pt;">
            <tr>
              <td style="font-size: 11pt; font-weight: bold; color: #0a2540;">
                ${c.role} — <a href="${c.url || 'https://www.youtube.com/@worldgyan'}" style="color: #dc2626; text-decoration: underline;">${c.channelOrPlatform}</a>
              </td>
              <td style="text-align: right; font-size: 9.5pt; font-weight: bold; color: #9f1239;">
                ${c.period}
              </td>
            </tr>
          </table>
          ${c.description ? `<p style="font-size: 9.5pt; color: #475569; margin: 2pt 0 4pt 0;">${c.description}</p>` : ''}
          <ul style="margin: 3pt 0 4pt 16pt; padding: 0;">
            ${(c.bullets || []).map((b) => `<li style="margin-bottom: 2pt; font-size: 9.5pt; color: #334155;">${b}</li>`).join('')}
          </ul>
          ${
            c.technologies && c.technologies.length > 0
              ? `<div style="font-size: 8.5pt; color: #9f1239; margin-top: 3pt;"><strong>Topics:</strong> ${c.technologies.join(', ')}</div>`
              : ''
          }
        </div>`
      )
      .join('');

    // Build Education entries
    const educationHtml = (education?.items || [])
      .map(
        (e) => `
        <div style="margin-bottom: 6pt; page-break-inside: avoid;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="font-size: 10.5pt; font-weight: bold; color: #0a2540;">
                ${e.institution} — <span style="font-weight: normal; color: #2563eb;">${e.degree}</span>
              </td>
              <td style="text-align: right; font-size: 9.5pt; font-weight: bold; color: #d97706;">
                ${e.period}
              </td>
            </tr>
          </table>
          ${e.location ? `<div style="font-size: 9pt; color: #64748b;">${e.location}</div>` : ''}
        </div>`
      )
      .join('');

    // Build Certifications entries
    const certHtml = (certifications?.items || [])
      .map(
        (cert) => `
        <tr style="page-break-inside: avoid;">
          <td style="padding: 3pt 0; font-size: 9.5pt;">
            ${
              cert.url
                ? `<a href="${cert.url}" style="font-weight: bold; color: #0a2540; text-decoration: underline;">${cert.title}</a>`
                : `<strong style="color: #0a2540;">${cert.title}</strong>`
            }
          </td>
          <td style="padding: 3pt 0; text-align: right; font-size: 9pt; color: #059669; font-weight: bold;">
            ${cert.issuer} • ${cert.year}
          </td>
        </tr>`
      )
      .join('');

    return `
<html xmlns:o='urn:schemas-microsoft-com:office:office'
      xmlns:w='urn:schemas-microsoft-com:office:word'
      xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset='utf-8'>
  <title>${hero.fullName || 'Resume'}</title>
  <!--[if gte mso 9]>
  <xml>
    <w:WordDocument>
      <w:View>Print</w:View>
      <w:Zoom>100</w:Zoom>
      <w:DoNotOptimizeForBrowser/>
    </w:WordDocument>
  </xml>
  <![endif]-->
  <style>
    @page Section1 {
      size: 8.5in 11.0in;
      margin: 0.6in 0.6in 0.6in 0.6in;
      mso-header-margin: 0.5in;
      mso-footer-margin: 0.5in;
      mso-paper-source: 0;
    }
    div.Section1 {
      page: Section1;
    }
    body {
      font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
      font-size: 10pt;
      line-height: 1.35;
      color: #1e293b;
      background-color: #ffffff;
    }
    h1.name {
      font-size: 20pt;
      font-weight: bold;
      color: #0a2540;
      margin: 0 0 2pt 0;
      text-transform: uppercase;
      letter-spacing: 0.5pt;
    }
    .role-title {
      font-size: 11pt;
      font-weight: 600;
      color: #1e3a8a;
      margin-bottom: 6pt;
    }
    .section-title {
      font-size: 11pt;
      font-weight: bold;
      color: #0a2540;
      text-transform: uppercase;
      letter-spacing: 0.5pt;
      border-bottom: 1.5pt solid #cbd5e1;
      padding-bottom: 2pt;
      margin-top: 12pt;
      margin-bottom: 6pt;
    }
    a {
      color: #2563eb;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="Section1">
    <!-- Header -->
    <table style="width: 100%; border-collapse: collapse; border-bottom: 2.5pt solid #0a2540; padding-bottom: 8pt; margin-bottom: 10pt;">
      <tr>
        <td>
          <h1 class="name">${hero.fullName || 'Ashutosh Kumar Choubey'}</h1>
          <div class="role-title">${hero.tagline || 'Lead Frontend Developer | Angular & TypeScript Specialist'}</div>
          <div style="font-size: 9pt; color: #475569; line-height: 1.5;">
            ${hero.phone ? `<span>📞 ${hero.phone}</span> &nbsp;|&nbsp; ` : ''}
            ${hero.email ? `<span>✉️ <a href="mailto:${hero.email}">${hero.email}</a></span> &nbsp;|&nbsp; ` : ''}
            ${hero.linkedinUrl ? `<span>🔗 <a href="${hero.linkedinUrl}">LinkedIn</a></span> &nbsp;|&nbsp; ` : ''}
            ${hero.githubUrl ? `<span>💻 <a href="${hero.githubUrl}">GitHub</a></span> &nbsp;|&nbsp; ` : ''}
            ${hero.youtubeUrl ? `<span>▶️ <a href="${hero.youtubeUrl}">YouTube (@worldgyan)</a></span> &nbsp;|&nbsp; ` : ''}
            ${hero.websiteUrl ? `<span>🌐 <a href="${hero.websiteUrl}">me.worldgyan.com</a></span> &nbsp;|&nbsp; ` : ''}
            ${hero.location ? `<span>📍 ${hero.location}</span>` : ''}
          </div>
        </td>
      </tr>
    </table>

    <!-- Professional Summary -->
    ${
      about?.summary
        ? `
    <div class="section-title">Professional Summary</div>
    <p style="font-size: 9.5pt; color: #334155; text-align: justify; margin: 4pt 0 8pt 0;">
      ${about.summary}
    </p>`
        : ''
    }

    <!-- Core Tech Stack -->
    ${
      skillsHtml
        ? `
    <div class="section-title">Core Tech Stack</div>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 8pt;">
      ${skillsHtml}
    </table>`
        : ''
    }

    <!-- Work Experience -->
    ${
      experienceHtml
        ? `
    <div class="section-title">Work Experience</div>
    ${experienceHtml}`
        : ''
    }

    <!-- YouTube & Content Creation -->
    ${
      contentHtml
        ? `
    <div class="section-title">YouTube & Content Creation</div>
    ${contentHtml}`
        : ''
    }

    <!-- Education -->
    ${
      educationHtml
        ? `
    <div class="section-title">Education</div>
    ${educationHtml}`
        : ''
    }

    <!-- Certifications -->
    ${
      certHtml
        ? `
    <div class="section-title">Certifications</div>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 8pt;">
      ${certHtml}
    </table>`
        : ''
    }
  </div>
</body>
</html>`;
  }
}
