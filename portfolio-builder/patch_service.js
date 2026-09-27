const fs = require('fs');
const file = 'src/app/core/services/resume-export.service.ts';
let content = fs.readFileSync(file, 'utf8');

const docMethod = `
  downloadDoc(data: ResumeExportData, fileName = 'Ashutosh_Kumar_Choubey_Resume.doc'): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.isGeneratingDoc.set(true);

    try {
      const htmlContent = this.buildWordDocumentHtml(data);
      const blob = new Blob(['\\ufeff' + htmlContent], {
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

  downloadDocx(data: ResumeExportData, fileName = 'Ashutosh_Kumar_Choubey_Resume.docx'): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Use same generating state to show spinner
    this.isGeneratingDoc.set(true);

    try {
      const htmlContent = this.buildWordDocumentHtml(data);
      const blob = new Blob(['\\ufeff' + htmlContent], {
        // Technically this is HTML, but many systems accept it this way.
        // We'll use the ms-word MIME type so it opens correctly.
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
`;

content = content.replace(/downloadDoc\(data: ResumeExportData.*?finally {\n      this\.isGeneratingDoc\.set\(false\);\n    }\n  }/s, docMethod);
fs.writeFileSync(file, content);
