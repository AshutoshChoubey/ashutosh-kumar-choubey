import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  effect,
  inject,
  signal
} from '@angular/core';
import {
  DEFAULT_PROFILE_SECTIONS,
  ProfileSection,
  SectionContent,
  SectionType
} from '../../shared/models/profile.model';
import { StorageService } from './storage';

export const PROFILE_STORAGE_KEY = 'pb_portfolio_sections_v1';

@Injectable({
  providedIn: 'root'
})
export class ProfileStateService {
  private readonly storage = inject(StorageService);

  // Private writable signals managing the canonical state
  private readonly _sections: WritableSignal<ProfileSection[]> = signal<ProfileSection[]>([]);
  private readonly _isInitialized: WritableSignal<boolean> = signal<boolean>(false);

  // Public read-only signal projections
  readonly sections: Signal<ProfileSection[]> = this._sections.asReadonly();
  readonly isInitialized: Signal<boolean> = this._isInitialized.asReadonly();

  // Computed signals
  readonly orderedSections: Signal<ProfileSection[]> = computed(() => {
    return [...this._sections()].sort((a, b) => a.displayOrder - b.displayOrder);
  });

  readonly totalSections: Signal<number> = computed(() => this._sections().length);

  readonly hasSections: Signal<boolean> = computed(() => this._sections().length > 0);

  readonly sectionsByType = computed(() => {
    const map = new Map<SectionType, ProfileSection[]>();
    for (const section of this.orderedSections()) {
      const list = map.get(section.type) ?? [];
      list.push(section);
      map.set(section.type, list);
    }
    return map;
  });

  constructor() {
    // 1. Hydrate state on bootstrap
    this.loadInitialState();

    // 2. Reactive synchronization effect
    effect(() => {
      const currentSections = this._sections();
      const isInitialized = this._isInitialized();

      // Guard against writing empty state prior to hydration
      if (isInitialized) {
        this.storage.setItem(PROFILE_STORAGE_KEY, currentSections);
      }
    });
  }

  /**
   * Loads saved profile state from LocalStorage, automatically upgrading to Ashutosh's resume data.
   */
  loadInitialState(): void {
    const saved = this.storage.getItem<ProfileSection[]>(PROFILE_STORAGE_KEY);

    // Automatically migrate if storage is empty or holds previous placeholder data
    const isOldPlaceholder =
      saved &&
      Array.isArray(saved) &&
      saved.some(
        (s) =>
          s.type === 'hero' &&
          ((s.content as any)?.fullName?.includes('Alex') ||
            (s.content as any)?.fullName?.includes('Vance'))
      );

    const hasReactOrPlaceholder =
      saved &&
      Array.isArray(saved) &&
      saved.some((s) => {
        const text = JSON.stringify(s).toLowerCase();
        return (
          text.includes('react') ||
          text.includes('copilot') ||
          text.includes('gemini')
        );
      });

    const hasContentSection =
      saved && Array.isArray(saved) && saved.some((s) => s.type === 'content');

    const hasCertLinks =
      saved &&
      Array.isArray(saved) &&
      saved.some(
        (s) =>
          s.type === 'certifications' &&
          (s.content as any)?.items?.some((c: any) => c.url?.includes('credly'))
      );

    if (
      saved &&
      Array.isArray(saved) &&
      saved.length > 0 &&
      !isOldPlaceholder &&
      !hasReactOrPlaceholder &&
      hasContentSection &&
      hasCertLinks
    ) {
      this._sections.set(saved);
    } else {
      this._sections.set(DEFAULT_PROFILE_SECTIONS);
      this.storage.setItem(PROFILE_STORAGE_KEY, DEFAULT_PROFILE_SECTIONS);
    }

    this._isInitialized.set(true);
  }

  /**
   * Add a new section to the profile.
   */
  add(
    section: Omit<ProfileSection, 'id' | 'displayOrder'> & {
      id?: string;
      displayOrder?: number;
    }
  ): ProfileSection {
    const current = this._sections();
    const nextOrder =
      section.displayOrder ??
      (current.length > 0 ? Math.max(...current.map((s) => s.displayOrder)) + 1 : 1);

    const newSection: ProfileSection = {
      id: section.id || this.generateId(section.type),
      type: section.type,
      title: section.title,
      content: section.content,
      displayOrder: nextOrder
    };

    this._sections.update((list) => [...list, newSection]);
    return newSection;
  }

  /**
   * Update an existing section by ID.
   */
  update(id: string, updates: Partial<Omit<ProfileSection, 'id'>>): boolean {
    let found = false;

    this._sections.update((list) =>
      list.map((item) => {
        if (item.id === id) {
          found = true;
          return {
            ...item,
            ...updates,
            id: item.id // Ensure ID remains immutable
          };
        }
        return item;
      })
    );

    return found;
  }

  /**
   * Delete a section by ID and automatically re-normalize displayOrder sequences.
   */
  delete(id: string): boolean {
    const beforeCount = this._sections().length;

    this._sections.update((list) =>
      list
        .filter((item) => item.id !== id)
        .sort((a, b) => a.displayOrder - b.displayOrder)
        .map((item, index) => ({
          ...item,
          displayOrder: index + 1
        }))
    );

    return this._sections().length < beforeCount;
  }

  /**
   * Reorders sections based on an ordered array of section IDs.
   */
  reorder(orderedIds: string[]): void {
    this._sections.update((list) => {
      const sectionMap = new Map(list.map((s) => [s.id, s]));
      const result: ProfileSection[] = [];

      orderedIds.forEach((id, index) => {
        const item = sectionMap.get(id);
        if (item) {
          result.push({
            ...item,
            displayOrder: index + 1
          });
          sectionMap.delete(id);
        }
      });

      // Append any sections not present in orderedIds
      sectionMap.forEach((remaining) => {
        result.push({
          ...remaining,
          displayOrder: result.length + 1
        });
      });

      return result;
    });
  }

  /**
   * Move a section from one index to another (e.g. Move Up / Move Down).
   */
  moveSection(fromIndex: number, toIndex: number): void {
    this._sections.update((list) => {
      const sorted = [...list].sort((a, b) => a.displayOrder - b.displayOrder);

      if (
        fromIndex < 0 ||
        fromIndex >= sorted.length ||
        toIndex < 0 ||
        toIndex >= sorted.length ||
        fromIndex === toIndex
      ) {
        return list;
      }

      const [target] = sorted.splice(fromIndex, 1);
      sorted.splice(toIndex, 0, target);

      return sorted.map((item, index) => ({
        ...item,
        displayOrder: index + 1
      }));
    });
  }

  /**
   * Retrieves a single section by its ID.
   */
  getSectionById(id: string): ProfileSection | undefined {
    return this._sections().find((s) => s.id === id);
  }

  /**
   * Reset the entire profile state to Ashutosh's resume template data.
   */
  resetToDefaults(): void {
    this._sections.set(DEFAULT_PROFILE_SECTIONS);
    this.storage.setItem(PROFILE_STORAGE_KEY, DEFAULT_PROFILE_SECTIONS);
  }

  /**
   * Explicitly load Ashutosh's full resume dataset.
   */
  loadResumeData(): void {
    this.resetToDefaults();
  }

  private generateId(type: string): string {
    const randomSuffix = Math.random().toString(36).substring(2, 8);
    return `sec-${type}-${Date.now().toString(36)}-${randomSuffix}`;
  }
}
