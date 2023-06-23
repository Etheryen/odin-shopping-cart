import { productsImages } from './mocked-product-images';

export type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const data = [
  {
    id: '6h8sd7f6h8snd7',
    name: 'Chair',
    price: 9.99,
    image: productsImages.chair,
  },
  {
    id: 'xnt18e128n321',
    name: 'Skateboard',
    price: 14.99,
    image: productsImages.skateboard,
  },
  {
    id: '8h67hfhgfhfg',
    name: 'Laptop',
    price: 599.99,
    image: productsImages.laptop,
  },
  {
    id: 'lfg0hlfg908h53',
    name: 'Spoon',
    price: 0.49,
    image: productsImages.spoon,
  },
  {
    id: 'mad7df8fad',
    name: 'Lamborghini Urus',
    price: 235000,
    image: productsImages.lamboUrus,
  },
] as ProductType[];

export const getShopProduts = (): ProductType[] => {
  return data;
};

export const getProductById = (id: string): ProductType => {
  const found = data.find((product) => product.id === id);

  if (!found) throw new Error('Product not found');

  return found;
};
