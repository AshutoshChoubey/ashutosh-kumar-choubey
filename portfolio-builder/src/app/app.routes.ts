import { Routes } from '@angular/router';
import { authGuard, guestGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/public-profile/landing/landing').then((m) => m.Landing),
    title: 'Ashutosh Kumar Choubey | Senior Software Developer Resume'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login').then((m) => m.LoginComponent),
    canActivate: [guestGuard],
    title: 'Admin Login | Profile Studio'
  },
  {
    path: 'builder',
    loadComponent: () =>
      import('./features/builder/dashboard/dashboard').then((m) => m.DashboardComponent),
    canActivate: [authGuard],
    title: 'Studio Dashboard | Profile Builder'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

