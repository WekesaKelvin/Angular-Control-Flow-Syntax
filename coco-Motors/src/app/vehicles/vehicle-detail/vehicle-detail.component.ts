import { Component, computed, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'vehicle-detail',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './vehicle-detail.component.html'
})
export class VehicleDetailComponent {
  errorMessage = '';
  cartService = inject(CartService);
  vehicleService = inject(VehicleService);

  vehicle = this.vehicleService.selectedVehicle;
  vehicleFilms = this.vehicleService.vehicleFilms;
  pageTitle = computed(() => this.vehicle() ? `Detail for: ${this.vehicle()?.name}` : '');

  addToCart(vehicle: Vehicle | undefined) {
    if (vehicle) {
      this.cartService.addToCart(vehicle);
    }
  }
}
