import React from 'react';
import Router from '@app/router';
import { rootStore, StoreContext } from '@app/services/store';

export const App = () => {
  return (
    <StoreContext.Provider value={rootStore}>
      <Router />
    </StoreContext.Provider>
  );
};
