import { TWLink } from './ui/tw-link';

export const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-5 bg-stone-100 p-5 sm:flex-row sm:gap-0 lg:px-[15vw]">
      <div className="text-center text-5xl font-bold text-stone-700">
        Online shop
      </div>
      <nav className="flex gap-4 text-stone-600">
        <TWLink to="/">Home</TWLink>
        <TWLink to="/shop">Shop</TWLink>
      </nav>
    </div>
  );
};
