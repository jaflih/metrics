import axios from 'axios';

const API_KEY = 'f8ec60a98ee35476d340d0daaf553da2';
const FMP_API = `https://financialmodelingprep.com/api/v3/available-traded/list?apikey=${API_KEY}`;

export const getSymbolsFromAPI = async () => {
  const getData = await axios.get(FMP_API);
  const symbolsList = [];
  for (let i = 0; i < 1000; i += 1) {
    symbolsList.push(getData.data[i]);
  }
  return symbolsList;
};

export default getSymbolsFromAPI;
