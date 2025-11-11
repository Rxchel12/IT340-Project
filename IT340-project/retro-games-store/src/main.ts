import { bootstrapApplication } from '@angular/platform-browser';
// Imports the correctly renamed file (app.component)
import { AppComponent } from './app/app.component'; 
import { appConfig } from './app/app.config'; 

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));