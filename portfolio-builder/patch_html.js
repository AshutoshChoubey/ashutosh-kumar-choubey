const fs = require('fs');
const file = 'src/app/features/public-profile/landing/landing.html';
let content = fs.readFileSync(file, 'utf8');

const btn1 = `<button
        type="button"
        class="btn-topbar btn-doc"
        (click)="downloadDoc()"
        [disabled]="isGeneratingDoc()"
        title="Download ATS-friendly Microsoft Word Document (.doc)"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        <span>.DOC</span>
      </button>
      
      <button
        type="button"
        class="btn-topbar btn-doc"
        (click)="downloadDocx()"
        [disabled]="isGeneratingDoc()"
        title="Download modern Microsoft Word Document (.docx)"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        <span>.DOCX</span>
      </button>`;

content = content.replace(/<button\n\s*type="button"\n\s*class="btn-topbar btn-doc".*?<\/button>/s, btn1);

const btn2 = `<button
          type="button"
          class="btn-footer btn-footer-doc"
          (click)="downloadDoc()"
          [disabled]="isGeneratingDoc()"
          title="Download Microsoft Word (.doc) format"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <span>.DOC Format</span>
        </button>
        
        <button
          type="button"
          class="btn-footer btn-footer-doc"
          (click)="downloadDocx()"
          [disabled]="isGeneratingDoc()"
          title="Download Microsoft Word (.docx) format"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <span>.DOCX Format</span>
        </button>`;

content = content.replace(/<button\n\s*type="button"\n\s*class="btn-footer btn-footer-doc".*?<\/button>/s, btn2);
fs.writeFileSync(file, content);
