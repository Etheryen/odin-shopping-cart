import { CartItemType } from '@/root';

export const isItemIdInCart = (itemId: string, cart: CartItemType[]) => {
  return cart.some((item) => item.id === itemId);
};
