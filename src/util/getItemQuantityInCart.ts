import { CartItemType } from '@/root';

export const getItemQuantityInCart = (id: string, cart: CartItemType[]) => {
  return cart.find((item) => item.id === id)?.quantity ?? 0;
};
