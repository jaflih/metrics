import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './symbol.css';

export default function Symbol({ symbol }) {
  return (
    <div className="symbol-container">
      <div className="symbol-link" data-testid={symbol.symbol}>
        <Link to={`/company/${symbol.symbol}`}>link</Link>
      </div>
      <div className="symbol-info">
        <span className="symbol-symbol">{symbol.symbol}</span>
        <span className="symbol-name">{symbol.name}</span>
        <span className="symbol-price">{symbol.price}</span>
      </div>
    </div>
  );
}

Symbol.propTypes = {
  symbol: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
