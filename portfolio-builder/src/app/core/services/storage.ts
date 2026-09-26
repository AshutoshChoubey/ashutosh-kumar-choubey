import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  /**
   * Safe getter for LocalStorage with automatic JSON deserialization.
   */
  getItem<T>(key: string, fallback: T | null = null): T | null {
    if (!this.isBrowser) {
      return fallback;
    }

    try {
      const raw = window.localStorage.getItem(key);
      if (raw === null || raw === undefined) {
        return fallback;
      }
      return JSON.parse(raw) as T;
    } catch (error) {
      console.error(`[StorageService] Error reading key "${key}" from LocalStorage:`, error);
      return fallback;
    }
  }

  /**
   * Safe setter for LocalStorage with automatic JSON serialization.
   */
  setItem<T>(key: string, value: T): boolean {
    if (!this.isBrowser) {
      return false;
    }

    try {
      const serialized = JSON.stringify(value);
      window.localStorage.setItem(key, serialized);
      return true;
    } catch (error) {
      console.error(`[StorageService] Error writing key "${key}" to LocalStorage:`, error);
      return false;
    }
  }

  /**
   * Remove a specific key.
   */
  removeItem(key: string): void {
    if (!this.isBrowser) {
      return;
    }
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`[StorageService] Error removing key "${key}":`, error);
    }
  }

  /**
   * Clear all stored values.
   */
  clear(): void {
    if (!this.isBrowser) {
      return;
    }
    try {
      window.localStorage.clear();
    } catch (error) {
      console.error('[StorageService] Error clearing LocalStorage:', error);
    }
  }
}
