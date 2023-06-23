import { ProductType } from '@/api/shop';
import { MinusSvg } from '@/assets/minus-svg';
import { PlusSvg } from '@/assets/plus-svg';
import { useCart } from '@/hooks/use-cart';
import { getItemQuantityInCart } from '@/util/getItemQuantityInCart';
import { isItemIdInCart } from '@/util/isItemIdInCart';
import { priceToFormatted } from '@/util/priceToFormatted';

export const Product = (props: ProductType) => {
  const { cartItems, setCartItemQuantity } = useCart();

  const isInCart = isItemIdInCart(props.id, cartItems);
  const quantityInCart = getItemQuantityInCart(props.id, cartItems);

  const formattedPrice = priceToFormatted(props.price);

  return (
    <div className="flex w-fit flex-col items-center gap-2 rounded border-2 border-solid border-stone-400 p-4">
      <img
        className="h-44 w-44 rounded object-cover"
        src={props.image}
        alt={props.name + ' image'}
      />
      <div className="text-center font-medium">{props.name}</div>
      <div className="text-center font-mono">{formattedPrice}</div>
      <button
        onClick={() => setCartItemQuantity(props.id, quantityInCart + 1)}
        className="hover w-full rounded border-2 border-solid border-stone-200 bg-stone-200 py-2 hover:border-stone-400 hover:bg-stone-300"
      >
        Add to cart
      </button>

      {isInCart && (
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCartItemQuantity(props.id, quantityInCart - 1)}
            className="flex h-6 w-6 items-center justify-center rounded border-2 border-solid border-stone-400 p-1 hover:border-stone-500"
          >
            <MinusSvg />
          </button>
          <button
            onClick={() => setCartItemQuantity(props.id, quantityInCart + 1)}
            className="flex h-6 w-6 items-center justify-center rounded border-2 border-solid border-stone-400 bg-stone-300 p-1 hover:border-stone-500 hover:bg-stone-400"
          >
            <PlusSvg />
          </button>
          <input
            onChange={(e) =>
              setCartItemQuantity(props.id, parseInput(e.target.value))
            }
            value={quantityInCart}
            className="w-12 rounded border-2 border-solid border-stone-400 p-1 text-right hover:border-stone-500 focus:border-stone-600 focus:shadow focus:shadow-stone-600 focus:outline-none"
            type="number"
            name={'amount' + props.id}
            id={'amount' + props.id}
          />
        </div>
      )}
    </div>
  );
};

const parseInput = (value: string) => {
  if (value.trim() === '') return 0;
  return parseInt(value);
};
