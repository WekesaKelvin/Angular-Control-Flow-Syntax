import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import {
  catchError,
  filter,
  forkJoin,
  map,
  Observable,
  shareReplay,
  switchMap,
  throwError
} from 'rxjs';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { Film, Vehicle, VehicleResponse } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private url = 'https://swapi.py4e.com/api/vehicles';
  http = inject(HttpClient);

  private vehicles$ = this.http.get<VehicleResponse>(this.url).pipe(
    map((data) =>
      data.results.map((v) => ({
        ...v,
        cost_in_credits: isNaN(Number(v.cost_in_credits))
          ? String(Math.random() * 100000)
          : v.cost_in_credits,
      }) as Vehicle)
    ),
    shareReplay(1),
    catchError(this.handleError)
  );

  vehicles = toSignal(this.vehicles$, {initialValue: [] as Vehicle[]});
  selectedVehicle = signal<Vehicle | undefined>(undefined);
  
  private vehicleFilms$ = toObservable(this.selectedVehicle).pipe(
    filter(Boolean),
    switchMap(vehicle =>
      forkJoin(vehicle.films.map(link =>
        this.http.get<Film>(link)))
    )
  );
  vehicleFilms = toSignal<Film[], Film[]>(this.vehicleFilms$, {initialValue: []});

  vehicleSelected(vehicleName: string) {
    const foundVehicle = this.vehicles().find((v) => v.name === vehicleName);
    this.selectedVehicle.set(foundVehicle);
  }

  constructor() {
    
  }
  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message
        }`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
