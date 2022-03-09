import { getCompanyProfileFromAPI, getSymbolsFromAPI } from '../api/financialmodelingprep';

export const GET_SYMBOLS = 'GET_SYMBOLS';
export const SEARCH_SYMBOLS = 'SEARCH_SYMBOLS';
export const GET_COMPANY = 'GET_COMPANY';
export const SHOW_LOADER = 'SHOW_LOADER';

const symbolsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case GET_SYMBOLS: {
      return {
        ...state,
        isSymbolsStored: true,
        symbols: action.payload,
        filteredSymbols: action.payload,
        loading: false,
      };
    }
    case GET_COMPANY: {
      return {
        ...state,
        company: action.payload,
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

export const getCompany = (data) => ({
  type: GET_COMPANY,
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

export const getCompanyDispatcher = (company) => async (dispatch) => {
  const profile = await getCompanyProfileFromAPI(company);
  dispatch(getCompany(profile));
};

export const getLoader = () => ({
  type: SHOW_LOADER,
});
