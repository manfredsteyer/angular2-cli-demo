import { FlightAppPage } from './app.po';

describe('flight-app App', function() {
  let page: FlightAppPage;

  beforeEach(() => {
    page = new FlightAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    page.setParameter('Hamburg', 'Graz');
    page.search();
    
    let count = page.getFlightCount();
    expect(count).toBe(3);
  });
});
