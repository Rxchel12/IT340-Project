// src/app/consoles/consoles.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-consoles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './consoles.component.html',
  styleUrl: './consoles.component.scss'
})
export class ConsolesComponent {
  constructor(private cart: CartService) {}

  addToCart(name: string, price: number, brand: string, description: string) {
    this.cart.addItem({
      name,
      price,
      brand,
      description,
      quantity: 1
    });
  }
}
