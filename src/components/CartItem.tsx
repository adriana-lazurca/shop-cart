import { Button, Stack } from 'react-bootstrap';
import { StoreProduct } from '../apis/productApi';

import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';

type CartItemProps = {
  quantity: number;
  product: StoreProduct;
};

export function CartItem({ quantity, product }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img src={product.imgUrl} style={{ width: '125px', height: '75px', objectFit: 'cover' }} />
      <div className="me-auto">
        <div>
          {product.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: '.65rem' }}>
              x{quantity}
            </span>
          )}
        </div>

        <div className="text-muted" style={{ fontSize: '.75rem' }}>
          {formatCurrency(product.price)}
        </div>
      </div>
      <div>{formatCurrency(product.price * quantity)}</div>

      <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(product.id)}>
        &times;
      </Button>
    </Stack>
  );
}
