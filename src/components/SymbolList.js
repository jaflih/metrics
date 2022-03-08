import React from 'react';
import Symbol from './Symbol';
import symbolsDatas from '../datas/symbols';

export default function SymbolList() {
  const symbols = symbolsDatas;
  return (
    <div className="symbols-container">
      {symbols.map((symbol) => (
        <Symbol key={symbol.symbol} symbol={symbol} />
      ))}
    </div>
  );
}
