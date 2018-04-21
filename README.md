# moltin-next-checkout

> ⚡️ Next.js demo for one-click moltin purchasing

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/moltin-examples/moltin-next-checkout&env=MOLTIN_CLIENT_ID&env=STRIPE_KEY&env=MICRO_ENDPOINT_URL)

Next.js app for one-click purchases with [moltin](https://moltin.com) and [Stripe](https://stripe.com).

Check out the [demo](https://moltin-next-checkout.now.sh/) here.

## 🛠 Setup

`npm install`

`npm run dev`

Create a `.env` file at the project root with your moltin `client_id`, Stripe public test key and your [moltin-micro-checkout](https://github.com/moltin-examples/moltin-micro-checkout) deployment URL.

```
MOLTIN_CLIENT_ID=
STRIPE_KEY=
MICRO_ENDPOINT_URL=https://moltin-micro-checkout.now.sh
```

Both a moltin _and_ Stripe account are needed for this to function. Be sure that your [Stripe keys](https://stripe.com/docs/dashboard#api-keys) are attached to your moltin store. Learn more about that [here](https://docs.moltin.com/?bash#configuring-stripe).
