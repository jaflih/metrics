import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFilteredSymbols } from '../redux/symbols/symbols';

import './symbolsearch.css';

export default function SymbolSearch() {
  const [inputSearch, setInputSearch] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getFilteredSymbols(inputSearch.toUpperCase()));
  };

  return (
    <div className="filter-container">
      <form>
        <input type="text" data-testid="inputSymbol" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} />
        <button type="button" data-testid="seachSymbol" onClick={handleClick}>
          Search
        </button>
      </form>
    </div>
  );
}
