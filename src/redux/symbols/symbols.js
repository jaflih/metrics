import { getSymbolsFromAPI } from '../api/financialmodelingprep';

export const GET_SYMBOLS = 'GET_SYMBOLS';
export const SEARCH_SYMBOLS = 'SEARCH_SYMBOLS';

const symbolsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SYMBOLS: {
      return {
        ...state,
        isSymbolsStored: true,
        symbols: action.payload,
        filteredSymbols: action.payload,
      };
    }
    case SEARCH_SYMBOLS: {
      const { symbols } = state;
      const filter = action.payload;
      const filSymList = symbols.filter((symbol) => symbol.symbol.toUpperCase().includes(filter));
      return {
        ...state,
        isSymbolsStored: true,
        symbols: state.symbols,
        filteredSymbols: filSymList,
      };
    }
    default: {
      return state;
    }
  }
};

export default symbolsReducer;

export const getSymbols = (data) => ({
  type: GET_SYMBOLS,
  payload: data,
});

export const getSymbolsDispatcher = () => async (dispatch) => {
  const symbols = await getSymbolsFromAPI();
  const a = getSymbols(symbols);
  dispatch(a);
};

export const getFilteredSymbols = (filter) => ({
  type: SEARCH_SYMBOLS,
  payload: filter,
});
