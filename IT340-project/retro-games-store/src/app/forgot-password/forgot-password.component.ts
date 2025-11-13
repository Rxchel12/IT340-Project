// src/app/forgot-password/forgot-password.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  email = '';
  submitted = false;

  constructor(private router: Router) {}

  onSubmit() {
    this.submitted = true;
    console.log('Password reset requested for:', this.email);
    // later: call your backend API here
  }

  backToLogin() {
    this.router.navigate(['/']);
  }
}
