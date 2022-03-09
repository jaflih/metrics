import { getSymbolsFromAPI } from '../api/financialmodelingprep';

export const GET_SYMBOLS = 'GET_SYMBOLS';

const symbolsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SYMBOLS:
      return {
        ...state,
        isSymbolsStored: true,
        symbols: action.payload,
      };
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
