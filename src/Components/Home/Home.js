import MobileNav from "./Mobile/MobileNav";
import Mobilezx7 from "./Mobile/Mobilezx7";
import Mobilezx9 from "./Mobile/Mobilezx9";
import MobileHero from "./Mobile/MobileHero";
import Mobileyx1 from "./Mobile/Mobileyx1";
import MobileCategory from "./Mobile/MobileCategory";
import MobileFooter from "./Mobile/MobileFooter";
import TabletNav from "./Tablet/TabletNav";
import TabletHero from "./Tablet/TabletHero";
export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <main className="w-full h-full">
        <MobileNav />
        <TabletNav />
        <MobileHero />
        <TabletHero />
        <div className=" w-full flex flex-col px-5 bg-white ">
          <MobileCategory />
          <Mobilezx9 />
          <Mobilezx7 />
          <Mobileyx1 />
          <Summary />
        </div>
        <MobileFooter />
      </main>
    </div>
  );
}

function Summary() {
  return (
    <div className="w-full flex flex-col mt-24 bg-tintwhite mb-24">
      <div className="w-full h-[300px] hero bg-cover"></div>
      <div className="flex flex-col items-center space-y-10 mt-10">
        <p className="text-center manropebh3 font-extrabold">
          BRINGING YOU THE <span className="text-brown">BEST</span> AUDIO GEAR
        </p>
        <p className="manropemed font-semibold text-center tracking-wider">
          Located at the heart of New York City,Audiophile is the premier
          storefor high end headphones,earphones,speakers, and audio
          accessories.We have a large showroom and luxury demonstration rooms
          available for you to browse and experience awide range of our
          porducts.Stop by our store to meet some of the fantastic people who
          make Audiophile the best place to buy your portable audio equipment
        </p>
      </div>
    </div>
  );
}
