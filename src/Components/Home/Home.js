import MobileNav from "./MobileNav";
export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <main className="w-full h-full">
        <MobileNav />
        <MobileHero />
        <div className="h-72 bg-red-100"></div>
      </main>
    </div>
  );
}

function MobileHero() {
  return (
    <div className="  flex justify-center items-center  md:hidden mobilehero w-full h-[750px] bg-cover ">
      <div className="flex flex-col space-y-2  items-center w-2/3 h-80 ">
        <p className="font-thin text-ashwhite tracking-[10px] manropesub">
          New Product
        </p>
        <p className="manropebh2 text-center tracking-widest font-bold text-white">
          XX99 MARK II HEADPHONES
        </p>
        <p className="manropereg text-center text-extratintwhite font-thin tracking-wide">
          Experience natural,lifelike audio and exceptional build quality made
          for the passionate music enthusiast
        </p>
        <button class="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-20 ">
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
