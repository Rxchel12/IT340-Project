import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  // Removed RouterLink since it's not used in the template
  imports: [FormsModule, CommonModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // Signals for form data
  email = signal('');
  password = signal('');

  constructor(private router: Router) {}

  goToRegister() {
    // Navigate to the register component
    this.router.navigate(['/register']);
  }

  goToHome() {
    // Navigate to the home component (simulated successful login)
    this.router.navigate(['/home']);
  }
}

