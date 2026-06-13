# Домашнє завдання — Тема 3. Породжувальні патерни: Фабрика та Абстрактна фабрика

Реалізація імітаційної архітектури платіжної системи з підтримкою трьох провайдерів: Stripe, PayPal та Apple Pay.

## Патерни

- **Factory Method** — кожен провайдер має власну фабрику, що реалізує інтерфейс `PaymentProviderFactory`
- **Abstract Factory** — `PaymentContext` вибирає та використовує потрібну фабрику, не знаючи про конкретні реалізації

## Структура проєкту

```
src/
├── core/
│   ├── PaymentProvider.ts          # Інтерфейс платіжного провайдера
│   └── PaymentProviderFactory.ts   # Інтерфейс фабрики
├── providers/
│   ├── stripe/
│   │   ├── StripeFactory.ts
│   │   └── StripePaymentProvider.ts
│   ├── paypal/
│   │   ├── PaypalFactory.ts
│   │   └── PaypalPaymentProvider.ts
│   └── apple/
│       ├── AppleFactory.ts
│       └── ApplePaymentProvider.ts
├── app/
│   └── PaymentContext.ts
└── main.ts
```

## Запуск

```bash
npm install
npx ts-node src/main.ts stripe
npx ts-node src/main.ts paypal
npx ts-node src/main.ts apple
```

Провайдер передається як аргумент командного рядка (`stripe` | `paypal` | `apple`). За замовчуванням — `stripe`.
