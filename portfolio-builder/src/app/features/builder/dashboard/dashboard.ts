import {
  Component,
  Signal,
  WritableSignal,
  computed,
  inject,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProfileStateService } from '../../../core/services/profile-state.service';
import {
  AboutContent,
  ExperienceContent,
  HeroContent,
  ProfileSection,
  SectionType,
  SkillsContent
} from '../../../shared/models/profile.model';
import { SectionEditorComponent } from '../components/section-editor/section-editor';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, SectionEditorComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {
  readonly profileState = inject(ProfileStateService);
  private readonly router = inject(Router);

  // Computed projections derived directly from ProfileStateService
  readonly sections: Signal<ProfileSection[]> = computed(() =>
    this.profileState.orderedSections()
  );

  readonly totalSections: Signal<number> = computed(() =>
    this.profileState.totalSections()
  );

  readonly hasSections: Signal<boolean> = computed(() =>
    this.profileState.hasSections()
  );

  // Search and Filter Signals
  readonly searchQuery: WritableSignal<string> = signal<string>('');
  readonly activeFilter: WritableSignal<string> = signal<string>('all');

  // Filtered view computed signal
  readonly filteredSections: Signal<ProfileSection[]> = computed(() => {
    const list = this.sections();
    const query = this.searchQuery().toLowerCase().trim();
    const filter = this.activeFilter();

    return list.filter((sec) => {
      const matchesType = filter === 'all' || sec.type === filter;
      const matchesQuery =
        !query ||
        sec.title.toLowerCase().includes(query) ||
        sec.type.toLowerCase().includes(query);
      return matchesType && matchesQuery;
    });
  });

  // Modal / Editor State
  readonly isEditorOpen: WritableSignal<boolean> = signal<boolean>(false);
  readonly editorMode: WritableSignal<'create' | 'edit'> = signal<'create'>('create');
  readonly selectedSection: WritableSignal<ProfileSection | null> =
    signal<ProfileSection | null>(null);

  // Deletion Confirmation State
  readonly deleteConfirmSection: WritableSignal<ProfileSection | null> =
    signal<ProfileSection | null>(null);

  // Feedback Notification State
  readonly toastMessage: WritableSignal<{ text: string; type: 'success' | 'info' | 'error' } | null> =
    signal(null);

  // Drag-and-Drop Reordering State
  readonly draggedIndex: WritableSignal<number | null> = signal<number | null>(null);
  readonly dragOverIndex: WritableSignal<number | null> = signal<number | null>(null);

  // --- Modal Triggers ---

  openCreateModal(): void {
    this.selectedSection.set(null);
    this.editorMode.set('create');
    this.isEditorOpen.set(true);
  }

  openEditModal(section: ProfileSection): void {
    this.selectedSection.set(section);
    this.editorMode.set('edit');
    this.isEditorOpen.set(true);
  }

  closeEditor(): void {
    this.isEditorOpen.set(false);
    this.selectedSection.set(null);
  }

  // --- CRUD Mutations Dispatched to State Service ---

  onSaveSection(
    sectionData: Omit<ProfileSection, 'displayOrder'> & { displayOrder?: number }
  ): void {
    if (this.editorMode() === 'create') {
      const created = this.profileState.add({
        type: sectionData.type,
        title: sectionData.title,
        content: sectionData.content
      });
      this.showToast(`Section "${created.title}" successfully created!`, 'success');
    } else {
      const targetId = sectionData.id;
      if (targetId) {
        this.profileState.update(targetId, {
          title: sectionData.title,
          content: sectionData.content
        });
        this.showToast(`Section "${sectionData.title}" updated successfully!`, 'success');
      }
    }
    this.closeEditor();
  }

  promptDelete(section: ProfileSection): void {
    this.deleteConfirmSection.set(section);
  }

  confirmDelete(): void {
    const sec = this.deleteConfirmSection();
    if (sec) {
      this.profileState.delete(sec.id);
      this.showToast(`Deleted section "${sec.title}".`, 'info');
      this.deleteConfirmSection.set(null);
    }
  }

  cancelDelete(): void {
    this.deleteConfirmSection.set(null);
  }

  // --- Reordering & Native HTML5 Drag-and-Drop ---

  moveUp(index: number): void {
    if (index > 0) {
      this.profileState.moveSection(index, index - 1);
      this.showToast('Section moved up.', 'info');
    }
  }

  moveDown(index: number): void {
    if (index < this.sections().length - 1) {
      this.profileState.moveSection(index, index + 1);
      this.showToast('Section moved down.', 'info');
    }
  }

  onDragStart(event: DragEvent, index: number): void {
    this.draggedIndex.set(index);
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', index.toString());
    }
  }

  onDragOver(event: DragEvent, index: number): void {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
    if (this.draggedIndex() !== null && this.draggedIndex() !== index) {
      this.dragOverIndex.set(index);
    }
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent, targetIndex: number): void {
    event.preventDefault();
    const sourceIndex = this.draggedIndex();

    if (sourceIndex !== null && sourceIndex !== targetIndex) {
      this.profileState.moveSection(sourceIndex, targetIndex);
      this.showToast('Section order updated.', 'info');
    }

    this.draggedIndex.set(null);
    this.dragOverIndex.set(null);
  }

  onDragEnd(): void {
    this.draggedIndex.set(null);
    this.dragOverIndex.set(null);
  }

  resetToDefaults(): void {
    if (confirm('Are you sure you want to restore default sections? Any customizations will be reset.')) {
      this.profileState.resetToDefaults();
      this.showToast('Restored default portfolio sections.', 'info');
    }
  }

  getSnippet(sec: ProfileSection): string {
    switch (sec.type) {
      case 'hero': {
        const h = sec.content as HeroContent;
        return `${h?.fullName || 'Untitled'} • ${h?.tagline || 'No tagline'}`;
      }
      case 'about': {
        const a = sec.content as AboutContent;
        return a?.summary || 'No summary text entered';
      }
      case 'skills': {
        const s = sec.content as SkillsContent;
        return `${s?.skills?.length || 0} skills configured`;
      }
      case 'experience': {
        const e = sec.content as ExperienceContent;
        return `${e?.items?.length || 0} career milestone(s)`;
      }
      default:
        return '';
    }
  }

  private showToast(text: string, type: 'success' | 'info' | 'error' = 'success'): void {
    this.toastMessage.set({ text, type });
    setTimeout(() => this.toastMessage.set(null), 3000);
  }
}
