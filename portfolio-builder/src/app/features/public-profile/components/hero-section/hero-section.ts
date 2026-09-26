import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroContent } from '../../../../shared/models/profile.model';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.scss']
})
export class HeroSection {
  readonly data = input.required<HeroContent>();
  readonly title = input<string>('Introduction');
  readonly isEditable = input<boolean>(true);
  readonly editRequested = output<void>();
}
