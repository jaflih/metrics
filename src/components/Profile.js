import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getCompanyDispatcher } from '../redux/symbols/symbols';

export default function Profile() {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.symbolsReducer.company || '');

  const { name } = useParams();

  useEffect(() => {
    if (company === '') dispatch(getCompanyDispatcher(name));
  });

  return (
    <div className="company-container">
      <span className="profile-symbol">{company.symbol}</span>
      <span className="profile-name">{company.name}</span>
      <span className="profile-companyName">{company.companyName}</span>
      <span className="profile-currency">{company.currency}</span>
      <span className="profile-sector">{company.industry}</span>
      <span className="profile-price">{company.price}</span>
      <span className="profile-changes">{company.changes}</span>
      <span className="profile-exchangeShortName">{company.exchangeShortName}</span>
      <span className="profile-image">{company.image}</span>
      <span className="profile-country">{company.country}</span>
    </div>
  );
}
