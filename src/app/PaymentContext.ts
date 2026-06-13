import { PaymentProviderFactory } from "../core/PaymentProviderFactory";

export class PaymentContext {
  private factory: PaymentProviderFactory;

  constructor(factory: PaymentProviderFactory) {
    this.factory = factory;
  }

  public processPayment(amount: number, transactionId: string): void {
    const provider = this.factory.createPaymentProvider();
    provider.authorize(amount);
    provider.capture(transactionId);
    provider.refund(transactionId);
  }
}