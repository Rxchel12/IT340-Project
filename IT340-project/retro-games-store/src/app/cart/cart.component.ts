import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  constructor(private cart: CartService) {}

  // Getter that returns the array of items
  get items() {
    return this.cart.items();
  }

  // Computed total price
  total = computed(() =>
    this.cart.items().reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
  );

  removeItem(name: string) {
    this.cart.removeItem(name);
  }

  clearCart() {
    this.cart.clear();
  }
}

