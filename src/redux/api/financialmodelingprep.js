import axios from 'axios';

const API_KEY = 'f8ec60a98ee35476d340d0daaf553da2';
const FMP_API = `https://financialmodelingprep.com/api/v3/available-traded/list?apikey=${API_KEY}`;

export const getSymbolsFromAPI = async () => {
  const getData = await axios.get(FMP_API);
  const symbols = [];
  for (let i = 0; i < 100; i += 1) {
    symbols.push(getData.data[i]);
  }

  return symbols;
};

export default getSymbolsFromAPI;
