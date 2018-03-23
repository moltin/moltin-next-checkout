import StripeCheckout from 'react-stripe-checkout'
import { Button, Icon } from 'semantic-ui-react'

import { buyProduct } from '../lib/moltin'

export default class BuyButton extends React.Component {
  _handlePurchase = async data => {
    const { productId: product } = this.props

    const {
      id: token,
      email,
      card: {
        name,
        address_line1: line_1,
        address_city: city,
        address_country: country,
        address_state: county,
        address_zip: postcode
      }
    } = data

    const customer = {
      name,
      email
    }

    const address = {
      first_name: name.split(' ')[0],
      last_name: name.split(' ')[1],
      line_1,
      city,
      county,
      country,
      postcode
    }

    try {
      await buyProduct(product, token, customer, address)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { productPrice: { amount, currency, formatted }, productName: name, productImage: image } = this.props

    return (
      <StripeCheckout
        name='Purchase Checkout'
        description={`Buying ${name} for ${formatted}`}
        image={image}
        amount={amount}
        currency={currency}
        stripeKey={process.env.STRIPE_KEY}
        shippingAddress={false}
        billingAddress={true}
        zipCode={true}
        token={this._handlePurchase}
        reconfigureOnUpdate={false}
        triggerEvent='onClick'>
        <Button
          icon
          labelPosition='left'
          primary
          color='blue'>
            Buy
            <Icon name='shop' />
        </Button>
      </StripeCheckout>
    )
  }
}
