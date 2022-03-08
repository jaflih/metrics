import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSymbolsDispatcher } from '../redux/symbols/symbols';
import Symbol from './Symbol';

export default function SymbolList() {
  const dispatch = useDispatch();

  const isSymbolsStored = useSelector((state) => state.symbolsReducer.isSymbolsStored || false);
  const symbols = useSelector((state) => state.symbolsReducer.filteredSymbols || []);

  useEffect(() => {
    if (!isSymbolsStored) {
      dispatch(getSymbolsDispatcher());
    }
  });

  return (
    <div className="symbols-container">
      {symbols.map((symbol) => (
        <Symbol key={symbol.symbol} symbol={symbol} />
      ))}
      {symbols.length === 0 && <div>Not found</div>}
    </div>
  );
}
