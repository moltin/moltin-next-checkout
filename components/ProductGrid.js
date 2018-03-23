import { Card } from "semantic-ui-react";

import BuyButton from "./BuyButton";

const mapProductsToItems = products =>
  products.map(({ id, name, image, description, meta }) => {
    const price = meta.display_price.with_tax || null;

    return {
      image,
      header: name,
      description,
      meta: price.formatted,
      extra: (
        <BuyButton
          productName={name}
          productPrice={price}
          productId={id}
          productImage={image}
        />
      ),
      fluid: true
    };
  });

export default ({ products }) => (
  <Card.Group items={mapProductsToItems(products)} itemsPerRow="3" stackable />
);
