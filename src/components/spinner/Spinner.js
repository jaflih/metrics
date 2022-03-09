import React from 'react';
import spinner from '../../assets/loader.gif';
import './spinner.css';

export default function Spinner() {
  return (
    <div className="loader-container">
      <img src={spinner} alt="Page is loading" />
    </div>
  );
}
