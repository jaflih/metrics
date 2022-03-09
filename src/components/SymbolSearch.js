import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredSymbols } from '../redux/symbols/symbols';

import './symbolsearch.css';

export default function SymbolSearch() {
  const [inputSearch, setInputSearch] = useState('');
  const dispatch = useDispatch();
  const nbResult = useSelector((state) => state.symbolsReducer.nbResult || 0);

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
      <div className="nb-result">
        <span>{nbResult}</span>
        found.
      </div>
    </div>
  );
}
