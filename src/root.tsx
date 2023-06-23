import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { isItemIdInCart } from './util/isItemIdInCart';
import { priceToFormatted } from './util/priceToFormatted';

export type CartItemType = {
  id: string;
  quantity: number;
};

export type CartContextType = {
  cartItems: CartItemType[];
  setCartItemQuantity: (id: string, quantity: number) => void;
  submitOrder: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export const Root = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const removeFromCart = (itemId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const setCartItemQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(itemId);
      return;
    }

    if (!isItemIdInCart(itemId, cartItems)) {
      setCartItems([...cartItems, { id: itemId, quantity }]);
      return;
    }

    setCartItems(
      cartItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const submitOrder = () => {
    alert(`Your order has been submitted, thank you for shopping!`);
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItemQuantity, submitOrder }}
    >
      <Outlet />
    </CartContext.Provider>
  );
};
