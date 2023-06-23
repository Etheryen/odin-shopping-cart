import { CartItemType } from '@/root';

export const getCartTotalQuantity = (cart: CartItemType[]) => {
  return cart.reduce((acc, item) => acc + item.quantity, 0);
};
