import { Navbar } from '@/components/navbar';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="min-h-screen justify-center text-stone-700 sm:justify-normal">
      <Navbar />
      <Outlet />
    </div>
  );
};
