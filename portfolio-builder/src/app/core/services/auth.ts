import { Injectable, Signal, WritableSignal, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage';
import { LoginCredentials, UserSession } from '../models/auth.model';

export const AUTH_STORAGE_KEY = 'pb_auth_session_v1';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storage = inject(StorageService);
  private readonly router = inject(Router);

  private readonly _session: WritableSignal<UserSession | null> = signal<UserSession | null>(null);

  readonly session: Signal<UserSession | null> = this._session.asReadonly();
  readonly isAuthenticated: Signal<boolean> = computed(() => this._session() !== null);
  readonly currentUser: Signal<UserSession | null> = this._session.asReadonly();

  constructor() {
    this.hydrateSession();
  }

  private hydrateSession(): void {
    const saved = this.storage.getItem<UserSession>(AUTH_STORAGE_KEY);
    if (saved && saved.email === 'admin@admin.com') {
      this._session.set(saved);
    }
  }

  login(credentials: LoginCredentials): { success: boolean; message?: string } {
    const email = credentials.email?.trim().toLowerCase();
    const password = credentials.password?.trim();

    if (email === 'admin@admin.com' && password === '1111') {
      const session: UserSession = {
        email: 'admin@admin.com',
        name: 'Ashutosh Kumar Choubey (Admin)',
        role: 'admin',
        token: `pb-tok-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 8)}`,
        loginTime: new Date().toISOString()
      };

      this._session.set(session);
      this.storage.setItem(AUTH_STORAGE_KEY, session);
      return { success: true };
    }

    return {
      success: false,
      message: 'Invalid credentials. Please use email: admin@admin.com and password: 1111'
    };
  }

  logout(): void {
    this._session.set(null);
    this.storage.removeItem(AUTH_STORAGE_KEY);
    this.router.navigate(['/']);
  }
}

