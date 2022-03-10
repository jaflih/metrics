import axios from 'axios';

const API_KEY = '?apikey=d1e19765909fe22f5eba1fca43a97de2';
const FMP_API = `https://financialmodelingprep.com/api/v3/available-traded/list${API_KEY}`;
const FMP_CP_API = 'https://financialmodelingprep.com/api/v3/profile/';

export const getSymbolsFromAPI = async () => {
  const getData = await axios.get(FMP_API);
  const symbolsList = [];
  for (let i = 0; i < 1000; i += 1) {
    symbolsList.push(getData.data[i]);
  }
  return symbolsList;
};

export const getCompanyProfileFromAPI = async (company) => {
  const getData = await axios.get(`${FMP_CP_API}${company}${API_KEY}`);
  return getData.data[0];
};

export default getSymbolsFromAPI;
