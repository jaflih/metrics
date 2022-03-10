import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SymbolList from './SymbolList';
import SymbolSearch from './SymbolSearch';
import Spinner from './spinner/Spinner';
import { getLoader } from '../redux/symbols/symbols';

export const SymbolPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.symbolsReducer.loading);

  useEffect(() => {
    dispatch(getLoader());
  }, [isLoading]);

  return (
    <div>
      <SymbolSearch />
      <SymbolList />
      {isLoading && <Spinner />}
    </div>
  );
};

export default SymbolPage;
