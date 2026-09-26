import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutContent } from '../../../../shared/models/profile.model';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.html',
  styleUrls: ['./about-section.scss']
})
export class AboutSection {
  readonly data = input.required<AboutContent>();
  readonly title = input<string>('About Me');
  readonly isEditable = input<boolean>(true);
  readonly editRequested = output<void>();
}
