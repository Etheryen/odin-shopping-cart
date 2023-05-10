import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation(props: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-between gap-5 bg-stone-100 p-5 sm:flex-row sm:gap-0 lg:px-[15vw]">
      <div className="text-center text-5xl font-bold text-stone-700">
        {props.children}
      </div>
      <nav className="flex gap-4 text-stone-600">
        <Link
          to={'/'}
          className="px-2 py-1 font-medium transition-all ease-in-out hover:rounded-lg hover:bg-stone-300 hover:text-stone-100"
        >
          Home
        </Link>
        <Link
          to={'/shop'}
          className="px-2 py-1 font-medium transition-all ease-in-out hover:rounded-lg hover:bg-stone-300 hover:text-stone-100"
        >
          Shop
        </Link>
      </nav>
    </div>
  );
}
