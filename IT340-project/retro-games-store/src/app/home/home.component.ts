import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  // Using an inline template for the Home Component
  template: `
    <div style="min-height: 100vh; padding: 40px; text-align: center;">
      <header 
        style="
          border: 4px solid black; 
          padding: 30px 20px; 
          box-shadow: 6px 6px 0 black; 
          margin-bottom: 40px; 
          /* UPDATED: Solid Electric Blue background */
          background-color: #ffffffe6;
          color: black; /* Changed text color to black for contrast against bright blue */
          text-shadow: 2px 2px 4px #353232ff;
        "
      >
        <h1 style="font-family: 'Arial Black', sans-serif; font-size: 3.5em; margin: 0;">
          RETRO GAMES & CONSOLES STORE
        </h1>
        <p style="font-family: Arial, sans-serif; margin-top: 10px; font-size: 1.2em;">Welcome Back, Player One!</p>
      </header>

      <div style="font-family: Arial, sans-serif; font-size: 1.5em; background-color: #ffffffe6; padding: 20px; border-radius: 8px;">
        <p>This is your main Home Page, where you'll find the inventory and shopping cart links.</p>
        <p>You have successfully completed Milestone 1!</p>
      </div>

    </div>
  `,
  // styleUrl has been removed
})
export class HomeComponent {

}