import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly loginForm: FormGroup = this.fb.group({
    email: ['admin@admin.com', [Validators.required, Validators.email]],
    password: ['1111', [Validators.required]]
  });

  readonly errorMessage = signal<string | null>(null);
  readonly isSubmitting = signal<boolean>(false);

  fillDemoCredentials(): void {
    this.loginForm.patchValue({
      email: 'admin@admin.com',
      password: '1111'
    });
    this.errorMessage.set(null);
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set(null);

    const { email, password } = this.loginForm.value;
    const result = this.authService.login({ email, password });

    if (result.success) {
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/builder';
      this.router.navigateByUrl(returnUrl);
    } else {
      this.errorMessage.set(result.message || 'Login failed. Please check credentials.');
      this.isSubmitting.set(false);
    }
  }
}
