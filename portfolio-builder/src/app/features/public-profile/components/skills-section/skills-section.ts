import { Component, computed, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillItem, SkillsContent } from '../../../../shared/models/profile.model';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.html',
  styleUrls: ['./skills-section.scss']
})
export class SkillsSection {
  readonly data = input.required<SkillsContent>();
  readonly title = input<string>('Technical Skills');
  readonly isEditable = input<boolean>(true);
  readonly editRequested = output<void>();

  // Active category filter for skills
  readonly selectedCategory = signal<string>('all');

  // Categories extracted dynamically from skills
  readonly categories = computed(() => {
    const list = this.data().skills || [];
    const set = new Set<string>();
    list.forEach((s) => {
      if (s.category) set.add(s.category);
    });
    return Array.from(set);
  });

  // Filtered skills based on active category
  readonly filteredSkills = computed(() => {
    const list = this.data().skills || [];
    const cat = this.selectedCategory();
    if (cat === 'all') return list;
    return list.filter((s) => s.category === cat);
  });
}
