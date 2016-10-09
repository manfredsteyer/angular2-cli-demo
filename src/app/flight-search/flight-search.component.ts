import {FlightService} from '../shared/flight.service';
import {Flight} from '../shared/flight';
import {Component} from '@angular/core';

@Component({
   selector: 'flight-search',
   templateUrl: './flight-search.component.html',
   styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {

    from: string = 'Hamburg';
    to: string = 'Graz';
    flights: Array<Flight> = [];
    selectedFlight: Flight;

    constructor(private flightService: FlightService) {
    }

    search() {

        if (!this.from || !this.to) return;

        this
            .flightService
            .find(this.from, this.to)
            .subscribe(
                flights => {
                    this.flights = flights;
                },
                err => {
                    console.error(err);
                }
            );

    }

}
