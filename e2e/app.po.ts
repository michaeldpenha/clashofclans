import { browser, by, element } from 'protractor';

export class ClashOfTitansPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
