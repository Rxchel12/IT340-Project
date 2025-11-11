import { Routes } from '@angular/router';

export const routes: Routes = [
    // The default path ('') loads the LoginComponent
    { 
        path: '', 
        loadComponent: () => import('./login/login.component')
                             .then(m => m.LoginComponent)
    },
    // Route for the registration page
    { 
        path: 'register', 
        loadComponent: () => import('./register/register.component')
                             .then(m => m.RegisterComponent)
    },
    // NEW: Route for the main home page
    { 
        path: 'home', 
        loadComponent: () => import('./home/home.component')
                             .then(m => m.HomeComponent)
    },
    // Fallback route
    { path: '**', redirectTo: '' }
];