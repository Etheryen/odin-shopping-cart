import { CartContext, CartContextType } from '@/root';
import { useContext } from 'react';

export const useCart = () => {
  return useContext(CartContext) as CartContextType;
};
