import { ProductType } from '../Shop';
import { productsImages } from '../assets';

type setters = {
  setQuantity: (id: string, quantity: number) => void;
  addToCart: (id: string) => void;
};

type ProductProps = ProductType & setters;

export default function Product({
  id,
  name,
  price,
  quantityInCart,
  setQuantity,
  addToCart,
}: ProductProps) {
  const image =
    productsImages[name.toLowerCase() as keyof typeof productsImages];

  function handleAddToCart(id: string) {
    if (quantityInCart === 0) {
      addToCart(id);
      return;
    }
    setQuantity(id, quantityInCart + 1);
  }

  return (
    <div className="flex w-fit flex-col items-center gap-2 rounded border-2 border-solid border-stone-400 p-4">
      <img
        className="h-44 w-44 rounded object-cover"
        src={image}
        alt={name + ' image'}
      />
      <div className="text-center font-medium">{name}</div>
      <div className="text-center font-mono">${price}</div>
      <button
        onClick={() => handleAddToCart(id)}
        className="w-full rounded border-2 border-solid border-stone-200 bg-stone-200 py-2 hover:border-stone-400 hover:bg-stone-300 hover:shadow hover:shadow-stone-400"
      >
        Add to cart
      </button>

      {quantityInCart > 0 && (
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity(id, quantityInCart - 1)}
            className="flex h-6 w-6 items-center justify-center rounded border-2 border-solid border-stone-400 p-1 hover:border-stone-500 hover:shadow hover:shadow-stone-500"
          >
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
                d="M19.5 12h-15"
              />
            </svg>
          </button>
          <button
            onClick={() => setQuantity(id, quantityInCart + 1)}
            className="flex h-6 w-6 items-center justify-center rounded border-2 border-solid border-stone-400 bg-stone-300 p-1 hover:border-stone-500 hover:bg-stone-400 hover:shadow hover:shadow-stone-500"
          >
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          <input
            onChange={(e) => setQuantity(id, parseInput(e.target.value))}
            value={quantityInCart}
            className="w-12 rounded border-2 border-solid border-stone-400 p-1 text-right hover:border-stone-500 hover:shadow hover:shadow-stone-500 focus:border-stone-600 focus:shadow focus:shadow-stone-600 focus:outline-none"
            type="number"
            name={'amount' + id}
            id={'amount' + id}
          />
        </div>
      )}
    </div>
  );
}

function parseInput(value: string) {
  if (value.trim() === '') return 0;
  return parseInt(value);
}
