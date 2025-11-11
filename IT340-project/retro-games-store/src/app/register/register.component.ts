import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  // Using an inline template for simplicity for now
  template: `
    <div style="text-align: center; padding: 50px; font-family: 'Arial Black', sans-serif; background-color: #f0f0f0; min-height: 100vh;">
      
      <h1 style="color: black; font-size: 3em; margin-bottom: 20px;">CREATE ACCOUNT</h1>
      <div style="background-color: white; border: 2px solid black; box-shadow: 4px 4px 0 black; padding: 30px; display: inline-block;">
          <h2 style="font-family: 'Arial Black', sans-serif; margin-bottom: 20px;">Registration Form Coming Soon!</h2>
          <p>This confirms the router is working correctly.</p>
          
          <!-- Button to navigate back to the login page -->
          <button 
            style="padding: 10px 20px; background-color: black; color: white; border: none; cursor: pointer; font-family: 'Arial Black', sans-serif; margin-top: 20px; box-shadow: 2px 2px 0 #555;"
            (click)="goToLogin()"
          >
            GO BACK TO LOGIN
          </button>
      </div>
    </div>
  `,
  // STYLE URL REMOVED: This fixes the NG2008 error.
  // We use inline styles above for quick confirmation.
})
export class RegisterComponent {
  
  // Inject the Router service
  constructor(private router: Router) {}
  
  // Navigate to the root path, which is the login page
  goToLogin() {
    this.router.navigate(['/']);
  }
}

