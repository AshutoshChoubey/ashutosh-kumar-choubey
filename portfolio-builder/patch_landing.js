const fs = require('fs');
const file = 'src/app/features/public-profile/landing/landing.ts';
let content = fs.readFileSync(file, 'utf8');

const docMethod = `  downloadDoc(): void {
    this.exportService.downloadDoc(
      {
        hero: this.heroContent(),
        about: this.aboutContent(),
        skills: this.skillsContent(),
        experience: this.experienceContent(),
        contentCreation: this.contentCreation(),
        education: this.educationContent(),
        certifications: this.certificationsContent()
      },
      'ashutosh_kumar_choubey_9+_years_of_exteriance_senior_frontened_engineer.doc'
    );
  }

  downloadDocx(): void {
    this.exportService.downloadDocx(
      {
        hero: this.heroContent(),
        about: this.aboutContent(),
        skills: this.skillsContent(),
        experience: this.experienceContent(),
        contentCreation: this.contentCreation(),
        education: this.educationContent(),
        certifications: this.certificationsContent()
      },
      'ashutosh_kumar_choubey_9+_years_of_exteriance_senior_frontened_engineer.docx'
    );
  }`;

content = content.replace(/downloadDoc\(\): void \{.*?\n  \}/s, docMethod);
fs.writeFileSync(file, content);
