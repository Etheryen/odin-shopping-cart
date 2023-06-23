const f = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const priceToFormatted = (price: number) => {
  return f.format(price);
};
