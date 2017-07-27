import { ClashOfTitansPage } from './app.po';

describe('clash-of-titans App', () => {
  let page: ClashOfTitansPage;

  beforeEach(() => {
    page = new ClashOfTitansPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
