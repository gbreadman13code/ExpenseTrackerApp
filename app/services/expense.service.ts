import { action, makeObservable, observable } from 'mobx';

export class ExpenseService {
  @observable expenses: string[] = [];

  constructor() {
    makeObservable(this);
  }
}

export const expenseStore = new ExpenseService();
