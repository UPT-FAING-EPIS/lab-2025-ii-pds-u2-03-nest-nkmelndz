import { Test, TestingModule } from '@nestjs/testing';
import { DomainService } from './domain.service';
import { Account } from './account';
import { WithdrawCommand } from './withdraw-command';
import { DepositCommand } from './deposit-command';
import { ATM } from './atm';

describe('DomainService', () => {
  let service: DomainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DomainService],
    }).compile();

    service = module.get<DomainService>(DomainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

describe('GivenAccountAndWithdraw_ThenExecute_ReturnsCorrectAmount', () => {
  let account: Account;

  beforeEach(() => {
    account = new Account();
    account.AccountBalance = 300;
    const amount = 100;
    const withdraw = new WithdrawCommand(account, amount);
    new ATM(withdraw).Action();
  });

  it('should be 200', () => {
    expect(account.AccountBalance).toBe(200);
  });
});

describe('GivenAccountAndDeposit_ThenExecute_ReturnsCorrectAmount', () => {
  let account: Account;

  beforeEach(() => {
    account = new Account();
    account.AccountBalance = 200;
    const amount = 100;
    const deposit = new DepositCommand(account, amount);
    new ATM(deposit).Action();
  });

  it('should be 300', () => {
    expect(account.AccountBalance).toBe(300);
  });
});
