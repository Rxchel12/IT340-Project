// src/app/cart/cart.service.ts
import { Injectable, signal } from '@angular/core';

export interface CartItem {
  name: string;
  brand: string;
  description: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // signal that holds the list of items
  private readonly _items = signal<CartItem[]>([]);
  readonly items = this._items; // expose it so components can use items()

  addItem(newItem: CartItem) {
    const current = this._items();
    const index = current.findIndex(i => i.name === newItem.name);

    if (index !== -1) {
      // already in cart → increase quantity
      const updated = [...current];
      updated[index] = {
        ...updated[index],
        quantity: updated[index].quantity + newItem.quantity
      };
      this._items.set(updated);
    } else {
      this._items.set([...current, newItem]);
    }
  }

  removeItem(name: string) {
    this._items.set(this._items().filter(i => i.name !== name));
  }

  clear() {
    this._items.set([]);
  }
}
