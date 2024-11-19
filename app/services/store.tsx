import React, { createContext, useContext } from 'react';
import { ExpenseService } from '@app/services/expense.service';

class RootStore {
  expense = new ExpenseService();
}

export const rootStore = new RootStore();

export const StoreContext = createContext(rootStore);

export const useStore = <T extends keyof RootStore>(serviceName: T): RootStore[T] => {
  const service = useContext(StoreContext);

  return service[serviceName];
};
