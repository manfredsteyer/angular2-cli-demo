import { FlightService } from './../shared/flight.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule} from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { FlightSearchComponent } from './flight-search.component';
import { Observable } from 'rxjs';

class FlightServiceMock {
    find(von, nach) {
        let result = [[{ id: 1, from: 'Graz', to: 'Hamburg', date: '2017-01-01' }]];
        return Observable.from(result);
    }
}

describe('Component: FlightSearch', () => {

 beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpModule, FormsModule, CommonModule],
        declarations: [FlightSearchComponent],
        providers: [
                {provide: FlightService, useClass: FlightServiceMock}
        ]
    });
 });


  it('does not load flights without parameter', () => {
    let flightSearch = TestBed.createComponent(FlightSearchComponent);
    flightSearch.componentInstance.from = '';
    flightSearch.componentInstance.to = '';
    flightSearch.componentInstance.search();
    expect(flightSearch.componentInstance.flights.length).toBe(0);
  });

  it('loads flights with parameter', () => {
    let flightSearch = TestBed.createComponent(FlightSearchComponent);
    flightSearch.componentInstance.from = 'Graz';
    flightSearch.componentInstance.to = 'Hamburg';
    flightSearch.componentInstance.search();
    expect(flightSearch.componentInstance.flights.length).toBe(1);
  });



});
