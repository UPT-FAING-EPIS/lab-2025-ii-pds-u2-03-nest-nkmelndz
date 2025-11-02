import { Account } from './account';
import { ICommand } from './icommand.interface';

export class DepositCommand implements ICommand {
  private _account: Account;
  private _amount: number;

  constructor(account: Account, amount: number) {
    this._account = account;
    this._amount = amount;
  }

  Execute(): void {
    this._account.Deposit(this._amount);
  }
}
