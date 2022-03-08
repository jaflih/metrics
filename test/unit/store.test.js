import symbolsReducer, { SEARCH_SYMBOLS, GET_SYMBOLS, getSymbolsDispatcher } from '../../src/redux/symbols/symbols';

jest.mock('../../src/redux/api/financialmodelingprep');

describe('Symbols actions', () => {
  describe('load symbols', () => {
    it('GET_SYMBOLS', () => {
      const state = [];
      const newState = symbolsReducer(state, {
        type: GET_SYMBOLS,
        payload: {
          symbol: 'CMCSA',
          name: 'Comcast Corporation',
          price: 46.3,
          exchange: 'Nasdaq Global Select',
          exchangeShortName: 'NASDAQ',
        },
      });

      expect(newState).toEqual({
        isSymbolsStored: true,
        filteredSymbols: {
          symbol: 'CMCSA',
          name: 'Comcast Corporation',
          price: 46.3,
          exchange: 'Nasdaq Global Select',
          exchangeShortName: 'NASDAQ',
        },
        symbols: {
          symbol: 'CMCSA',
          name: 'Comcast Corporation',
          price: 46.3,
          exchange: 'Nasdaq Global Select',
          exchangeShortName: 'NASDAQ',
        },
      });
    });

    it('store symbols retrieved from the API', () => {
      const symbolsList = [
        {
          symbol: 'SPY',
          name: 'SPDR S&P 500 ETF Trust',
          price: 419.43,
          exchange: 'New York Stock Exchange Arca',
          exchangeShortName: 'AMEX',
        },
        {
          symbol: 'CMCSA',
          name: 'Comcast Corporation',
          price: 46.3,
          exchange: 'Nasdaq Global Select',
          exchangeShortName: 'NASDAQ',
        },
      ];

      const dispatch = jest.fn();

      getSymbolsDispatcher()(dispatch).then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: GET_SYMBOLS,
          payload: symbolsList,
        });
      });
    });
  });

  describe('filter symbols', () => {
    it('SEARCH_SYMBOLS', () => {
      const state = {
        isSymbolsStored: true,
        filteredSymbols: [
          {
            symbol: 'SPY',
            name: 'SPDR S&P 500 ETF Trust',
            price: 419.43,
            exchange: 'New York Stock Exchange Arca',
            exchangeShortName: 'AMEX',
          },
          {
            symbol: 'CMCSA',
            name: 'Comcast Corporation',
            price: 46.3,
            exchange: 'Nasdaq Global Select',
            exchangeShortName: 'NASDAQ',
          },
          {
            symbol: 'KMI',
            name: 'Kinder Morgan, Inc.',
            price: 18.72,
            exchange: 'New York Stock Exchange',
            exchangeShortName: 'NYSE',
          },
          {
            symbol: 'INTC',
            name: 'Intel Corporation',
            price: 47.68,
            exchange: 'Nasdaq Global Select',
            exchangeShortName: 'NASDAQ',
          },
          {
            symbol: 'MU',
            name: 'Micron Technology, Inc.',
            price: 75.7,
            exchange: 'Nasdaq Global Select',
            exchangeShortName: 'NASDAQ',
          },
        ],
        symbols: [
          {
            symbol: 'SPY',
            name: 'SPDR S&P 500 ETF Trust',
            price: 419.43,
            exchange: 'New York Stock Exchange Arca',
            exchangeShortName: 'AMEX',
          },
          {
            symbol: 'CMCSA',
            name: 'Comcast Corporation',
            price: 46.3,
            exchange: 'Nasdaq Global Select',
            exchangeShortName: 'NASDAQ',
          },
          {
            symbol: 'KMI',
            name: 'Kinder Morgan, Inc.',
            price: 18.72,
            exchange: 'New York Stock Exchange',
            exchangeShortName: 'NYSE',
          },
          {
            symbol: 'INTC',
            name: 'Intel Corporation',
            price: 47.68,
            exchange: 'Nasdaq Global Select',
            exchangeShortName: 'NASDAQ',
          },
          {
            symbol: 'MU',
            name: 'Micron Technology, Inc.',
            price: 75.7,
            exchange: 'Nasdaq Global Select',
            exchangeShortName: 'NASDAQ',
          },
        ],
      };

      const newState = symbolsReducer(state, {
        type: SEARCH_SYMBOLS,
        payload: 'MU',
      });

      expect(newState).toEqual({
        isSymbolsStored: true,
        filteredSymbols: [
          {
            symbol: 'MU',
            name: 'Micron Technology, Inc.',
            price: 75.7,
            exchange: 'Nasdaq Global Select',
            exchangeShortName: 'NASDAQ',
          },
        ],
        symbols: [
          {
            symbol: 'SPY',
            name: 'SPDR S&P 500 ETF Trust',
            price: 419.43,
            exchange: 'New York Stock Exchange Arca',
            exchangeShortName: 'AMEX',
          },
          {
            symbol: 'CMCSA',
            name: 'Comcast Corporation',
            price: 46.3,
            exchange: 'Nasdaq Global Select',
            exchangeShortName: 'NASDAQ',
          },
          {
            symbol: 'KMI',
            name: 'Kinder Morgan, Inc.',
            price: 18.72,
            exchange: 'New York Stock Exchange',
            exchangeShortName: 'NYSE',
          },
          {
            symbol: 'INTC',
            name: 'Intel Corporation',
            price: 47.68,
            exchange: 'Nasdaq Global Select',
            exchangeShortName: 'NASDAQ',
          },
          {
            symbol: 'MU',
            name: 'Micron Technology, Inc.',
            price: 75.7,
            exchange: 'Nasdaq Global Select',
            exchangeShortName: 'NASDAQ',
          },
        ],
      });
    });
  });
});
