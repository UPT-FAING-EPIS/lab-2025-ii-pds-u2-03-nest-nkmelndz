import { Test, TestingModule } from '@nestjs/testing';
import { DomainService } from './domain.service';
import { PaymentService } from './payment-service';

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

describe('GivenAValidPaymentTypeAndAmount_WhenProcessPayment_ResultIsSuccesful', () => {
    type TestCase = [paymentType: number, amount: number];

    it.each<TestCase>([
        [1, 1000],
        [2, 2000],
        [3, 3000],
    ])('Payment type %i and amount %i should be true', (paymentType, amount) => {
        expect(new PaymentService().ProcessPayment(paymentType, amount)).toBeTruthy();
    });
});

describe('GivenAnUnknownPaymentTypeAndAmount_WhenProcessPayment_ResultIsError', () => {
    type TestCase = [paymentType: number, amount: number];

    it.each<TestCase>([
        [4, 4000],
    ])('Payment type %i and amount %i should be error', (paymentType, amount) => {
        expect(() => {
            new PaymentService().ProcessPayment(paymentType, amount);
        }).toThrow("You Select an Invalid Payment Option");
    });
});
