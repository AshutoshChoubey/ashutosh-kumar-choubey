import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceContent } from '../../../../shared/models/profile.model';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-section.html',
  styleUrls: ['./experience-section.scss']
})
export class ExperienceSection {
  readonly data = input.required<ExperienceContent>();
  readonly title = input<string>('Professional Experience');
  readonly isEditable = input<boolean>(true);
  readonly editRequested = output<void>();
}
