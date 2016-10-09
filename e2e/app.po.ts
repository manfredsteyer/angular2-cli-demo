import { browser, element, by } from 'protractor';

export class FlightAppPage {
  navigateTo() {
    return browser.get('/');
  }

  setParameter(from: string, to: string) {
    element(by.name('from')).clear();
    element(by.name('from')).sendKeys(from);
    element(by.name('to')).clear();
    element(by.name('to')).sendKeys(to);
  }

  search() {
    element(by.tagName('button')).click();
  }

  getFlightCount() {
    return element.all(by.tagName('tr')).count();
  }
}
