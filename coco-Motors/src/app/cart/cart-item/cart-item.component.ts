import { Component, Input, computed, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'cart-item',
  standalone: true,
  imports: [DecimalPipe, FormsModule],
  templateUrl: './cart-item.component.html'
})
export class CartItemComponent {
  cartService = inject(CartService);

  _item!: CartItem;
  get item(): CartItem {
    return this._item;
  }
  @Input() set item(item: CartItem) {
    this._item = item;
    this.cartItem.set(item);
  }

  qtyArr = signal([1, 2, 3, 4, 5, 6, 7, 8]);

  cartItem = signal(this.item);

  exPrice = computed(() =>
    this.cartItem().quantity * Number(this.cartItem().vehicle.cost_in_credits));

  onQuantitySelected(quantity: number): void {
    this.cartService.updateInCart(this.cartItem(), Number(quantity));
  }

  onRemove(): void {
    this.cartService.removeFromCart(this.cartItem());
  }
}
