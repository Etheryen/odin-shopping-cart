import { getProductById } from '@/api/shop';
import { ChevronDownSvg } from '@/assets/chevron-down-svg';
import { ChevronUpSvg } from '@/assets/chevron-up-svg';
import { useCart } from '@/hooks/use-cart';
import { CartItemType } from '@/root';
import { priceToFormatted } from '@/util/priceToFormatted';

const CartItem = ({ item }: { item: CartItemType }) => {
  const { setCartItemQuantity } = useCart();

  const productInfo = getProductById(item.id);

  const formattedPrice = priceToFormatted(productInfo.price);

  return (
    <div className="flex gap-3">
      <img
        src={productInfo.image}
        alt={productInfo.name}
        className="h-24 w-24 rounded object-cover"
      />
      <div className="flex flex-col justify-evenly">
        <button onClick={() => setCartItemQuantity(item.id, item.quantity + 1)}>
          <ChevronUpSvg />
        </button>
        <button>{item.quantity}</button>
        <button onClick={() => setCartItemQuantity(item.id, item.quantity - 1)}>
          <ChevronDownSvg />
        </button>
      </div>
      <div>
        <h3 className="text-lg font-medium">{productInfo.name}</h3>
        <p className="font-mono">{formattedPrice}</p>
      </div>
    </div>
  );
};

const Total = () => {
  const { cartItems } = useCart();

  const productsInCartWithQuantity = cartItems.map((item) => {
    return { ...getProductById(item.id), quantity: item.quantity };
  });

  const total = productsInCartWithQuantity.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const formattedTotal = priceToFormatted(total);

  return (
    <div className="text-center text-4xl font-bold">
      Total: {formattedTotal}
    </div>
  );
};

const CartPage = () => {
  const { cartItems, submitOrder } = useCart();

  return (
    <div className="flex flex-col gap-8 px-4 py-6 text-stone-700 sm:px-[15vw]">
      <h1 className="text-center text-3xl font-medium sm:text-left">Cart</h1>
      <div className="flex flex-col flex-wrap justify-center gap-8 sm:flex-row sm:justify-normal">
        {cartItems.length === 0 && (
          <div className="w-full text-center text-4xl font-bold">
            Cart is empty
          </div>
        )}
        {cartItems.length > 0 && (
          <>
            <div className="space-y-3">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="flex flex-grow flex-col items-center justify-center gap-5">
              <Total />
              <button
                onClick={() => submitOrder()}
                className="hover rounded border-2 border-solid border-stone-200 bg-stone-200 px-4 py-2 text-2xl hover:border-stone-400 hover:bg-stone-300"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
