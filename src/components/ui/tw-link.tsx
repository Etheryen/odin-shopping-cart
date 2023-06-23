import { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export const TWLink = ({ children, to }: PropsWithChildren & LinkProps) => {
  return (
    <Link
      to={to}
      className="rounded-lg px-2 py-1 font-medium transition-colors ease-in-out hover:bg-stone-300 hover:text-stone-100"
    >
      {children}
    </Link>
  );
};
