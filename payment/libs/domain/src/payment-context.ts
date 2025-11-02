import { IPaymentStrategy } from "./ipayment-strategy.interface";

export class PaymentContext {
    private PaymentStrategy!: IPaymentStrategy; // Usar el operador de aserción definitiva

    public SetPaymentStrategy(strategy: IPaymentStrategy): void {
        this.PaymentStrategy = strategy;
    }

    public Pay(amount: number): boolean {
        return this.PaymentStrategy.Pay(amount);
    }
}
