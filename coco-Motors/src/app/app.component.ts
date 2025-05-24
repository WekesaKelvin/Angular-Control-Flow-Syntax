import { Component, computed, inject } from '@angular/core';
import { CartService } from './cart/cart.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Coco Motors Luxury Imports';
  cartService = inject(CartService);
  
  cartCount = computed(() => this.cartService.cartItems().reduce(
    (acc, item) => acc + item.quantity, 0
  ));
}
