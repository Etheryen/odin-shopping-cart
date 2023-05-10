import Navigation from './components/Navigation';
import shop from './assets/shop.jpg';

export default function Home() {
  return (
    <div className="min-h-screen justify-center sm:justify-normal">
      <Navigation>Home page</Navigation>
      <div className="flex flex-col gap-4 px-4 py-6 text-stone-700 sm:px-[15vw]">
        <h1 className="text-3xl font-medium">Home</h1>
        <p>
          There is nothing of use on this page, but make sure to check out our
          shop!
        </p>
        <img
          className="w-96 rounded-lg border-4 border-solid border-stone-500"
          src={shop}
          alt="shop"
        />
      </div>
    </div>
  );
}
