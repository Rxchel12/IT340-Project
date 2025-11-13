import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () =>
      import('./login/login.component').then(m => m.LoginComponent)
  },
  { 
    path: 'register', 
    loadComponent: () =>
      import('./register/register.component').then(m => m.RegisterComponent)
  },
  { 
    path: 'home', 
    loadComponent: () =>
      import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./forgot-password/forgot-password.component')
        .then(m => m.ForgotPasswordComponent)
  },
  {
    path: 'consoles',
    loadComponent: () =>
      import('./consoles/consoles.component')
        .then(m => m.ConsolesComponent)
  },
  {
  path: 'cart',
  loadComponent: () =>
    import('./cart/cart.component').then(m => m.CartComponent)
},

  { path: '**', redirectTo: '' }
];
