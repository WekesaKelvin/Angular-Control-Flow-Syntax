import { Component, computed, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'vehicle-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './vehicle-list.component.html'
})
export class VehicleListComponent {
  pageTitle = 'Vehicles';
  errorMessage = '';
  vehicleService = inject(VehicleService);

  vehicles = computed(() => {
    try {
      return this.vehicleService.vehicles();
    } catch (e) {
      this.errorMessage = typeof e === 'string'? e : 'Error';
      return [];
    }
  });
  selectedVehicle = this.vehicleService.selectedVehicle;

  onSelected(vehicleName: string): void {
    this.vehicleService.vehicleSelected(vehicleName);
  }

}
