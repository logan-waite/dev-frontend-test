import { shallowMount } from '@vue/test-utils'
import Stocks from './Stocks';
import { getStockList } from '../service/api.service';

jest.mock('../service/api.service', () => {
  return {
    getStockList: jest.fn(),
  }
})

const STOCK_LIST = [
  {
    "symbol": "NTAP",
    "company": "NetApp Inc",
    "price": 71.24
  },
  {
    "symbol": "GOOG",
    "company": "Alphabet Inc",
    "price": 829.08
  }
];

describe('Stocks', () => {
  it('should contain 2 heading elements', () => {
    const wrapper = shallowMount(Stocks);

    const headElms = wrapper.findAll('h3');

    expect(headElms.length).toBe(2);
    expect(headElms.at(0).text()).toBe('Current Stock Prices');
    expect(headElms.at(1).text()).toBe('Stocks I own:');
  });

  it('should render all stocks received from the api', async () => {
    const wrapper = shallowMount(Stocks, {
      data() {
        return {
          stocks: STOCK_LIST
        };
      }
    });

    const listItems = wrapper.findAll('.stock-list li');
    expect(listItems.length).toBe(2);
    expect(listItems.at(0).get('.card-title').text()).toBe('NTAP');
    expect(listItems.at(1).get('.card-title').text()).toBe('GOOG');
  });

  it('should render a stub for the purchased component', () => {
    const wrapper = shallowMount(Stocks);

    expect(wrapper.get('Purchased-stub'));
  });
});
