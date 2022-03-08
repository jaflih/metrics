import React from 'react';
import PropTypes from 'prop-types';

export default function Symbol({ symbol }) {
  return (
    <div className="symbol-container">
      <span className="symbol-symbol">{symbol.symbol}</span>
      <span className="symbol-name">{symbol.name}</span>
      <span className="symbol-price">{symbol.price}</span>
    </div>
  );
}

Symbol.propTypes = {
  symbol: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
