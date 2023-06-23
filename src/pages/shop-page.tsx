import { getShopProduts } from '@/api/shop';
import { CartSvg } from '@/assets/cart-svg';
import { Product } from '@/components/product';
import { useCart } from '@/hooks/use-cart';
import { getCartTotalQuantity } from '@/util/getCartTotalQuantity';
import { Link } from 'react-router-dom';

const ShopPage = () => {
  const { cartItems } = useCart();
  const products = getShopProduts();

  const cartItemsTotalQuantity = getCartTotalQuantity(cartItems);

  return (
    <>
      <div className="sticky top-0 flex justify-end bg-stone-200 p-4 text-right text-stone-700 lg:px-[15vw]">
        <Link to={'/cart'} className="flex gap-2">
          <CartSvg />
          <span>
            Go to cart ({cartItemsTotalQuantity} item
            {cartItemsTotalQuantity !== 1 ? 's' : ''})
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-8 px-4 py-6 text-stone-700 sm:px-[15vw]">
        <h1 className="text-center text-3xl font-medium sm:text-left">Shop</h1>
        <div className="flex flex-wrap justify-center gap-4 sm:justify-normal">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopPage;
