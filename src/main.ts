import { PaymentContext } from "./app/PaymentContext";
import { PaymentProviderFactory } from "./core/PaymentProviderFactory";
import { StripeFactory } from "./providers/stripe/StripeFactory";
import { PaypalFactory } from "./providers/paypal/PaypalFactory";
import { AppleFactory } from "./providers/apple/AppleFactory";

//аргумент з командного рядка 
const providerInput = process.argv[2]?.toLowerCase();

let factory: PaymentProviderFactory;

switch (providerInput) {
  case "stripe":
    factory = new StripeFactory();
    break;
  case "paypal":
    factory = new PaypalFactory();
    break;
  case "apple":
    factory = new AppleFactory();
    break;
  default:
    console.error("Помилка: Вкажіть правильного провайдера (stripe, paypal або apple).");
    console.error("Приклад: npx ts-node src/main.ts stripe");
    process.exit(1);
}

const paymentContext = new PaymentContext(factory);

const mockTransactionId = providerInput === "stripe" ? "4g7rfa" : "epv2y";

paymentContext.processPayment(100, mockTransactionId);