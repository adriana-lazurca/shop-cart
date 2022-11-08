import { Offcanvas, Stack } from 'react-bootstrap';

import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';
import { CartItem } from './CartItem';
import { getProductsByIds } from '../apis/productApi';
import { useMemo } from 'react';

type ShoppingCartProps = { isOpen: boolean };

export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();
  const cartProducts = useMemo(() => getProductsByIds(cartItems.map((cartItem) => cartItem.id)), [cartItems]);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => {
            const product = cartProducts.find((product) => product.id === item.id)!;
            return <CartItem key={item.id} {...item} product={product} />;
          })}
          <div className="ms-auto fw-bold fs-5">
            Total:{' '}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = cartProducts.find((cartProduct) => cartProduct.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0),
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
