import { AppPage } from './app.po';
import { by } from 'protractor';

describe('angular-dev-test App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Stock Tracker!');
  });

  it('should display a list of stocks', () => {
    page.navigateTo();
    const stockList = page.getStockList();
    expect(stockList.all(by.tagName('li')).count()).toBeGreaterThan(1);
  });
});
