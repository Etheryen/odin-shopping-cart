import { createId } from '@paralleldrive/cuid2';
import Navigation from './components/Navigation';
import Product from './components/Product';
import { useState } from 'react';

export type ProductType = {
  id: string;
  name: string;
  price: number;
  quantityInCart: number;
};

export default function Shop() {
  const [cart, setCart] = useState<ProductType[]>([]);

  const products = [
    {
      id: '1',
      name: 'Chair',
      price: 9.99,
      quantityInCart: getQuantity('1'),
    },
  ] as ProductType[];

  function getQuantity(id: string) {
    const product = cart.find((product) => product.id === id);
    if (!product) return 0;
    return product.quantityInCart;
  }

  function addToCart(id: string) {
    const product = products.find((product) => product.id === id);
    if (product) {
      product.quantityInCart = 1;
      setCart([...cart, product]);
    }
  }

  function removeFromCart(id: string) {
    const newCart = [...cart].filter((product) => product.id !== id);
    setCart(newCart);
  }

  function setQuantity(id: string, quantity: number) {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    const newCart = [...cart];
    const product = newCart.find((product) => product.id === id);
    if (product) product.quantityInCart = quantity;

    setCart(newCart);
  }

  function getTotalQuantity() {
    return cart.reduce(
      (prevQuantity, curr) => prevQuantity + curr.quantityInCart,
      0
    );
  }

  return (
    <div className="min-h-screen justify-center sm:justify-normal">
      <Navigation>Shop page</Navigation>
      <div className="sticky top-0 flex justify-end gap-2 bg-stone-200 p-4 text-right text-stone-700 lg:px-[15vw]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <span>
          Go to cart ({getTotalQuantity()} item
          {getTotalQuantity() !== 1 ? 's' : ''})
        </span>
      </div>
      <div className="flex flex-col gap-8 px-4 py-6 text-stone-700 sm:px-[15vw]">
        <h1 className="text-3xl font-medium">Shop</h1>
        <div className="flex flex-wrap justify-center gap-4 sm:justify-normal">
          {products.map((product) => (
            <Product
              key={product.id}
              {...product}
              setQuantity={setQuantity}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
