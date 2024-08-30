import MobileNav from "./Mobile/MobileNav";
import Mobilezx7 from "./Mobile/Mobilezx7";
import Mobilezx9 from "./Mobile/Mobilezx9";
import MobileHero from "./Mobile/MobileHero";
import Mobileyx1 from "./Mobile/Mobileyx1";
import MobileCategory from "./Mobile/MobileCategory";
import MobileFooter from "./Mobile/MobileFooter";
import TabletNav from "./Tablet/TabletNav";
import TabletHero from "./Tablet/TabletHero";
import TabletCategory from "./Tablet/TabletCategory";
import Tabletzx9 from "./Tablet/Tabletzx9";
import Tabletzx7 from "./Tablet/Tabletzx7";
import Tabletyx1 from "./Tablet/Tabletyx1";
import Mobilesummary from "./Mobile/Mobilesummary";
import Tabletsummary from "./Tablet/Tabletsummary";
import Tabletfooter from "./Tablet/TabletFooter";
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
          <TabletCategory />
          <Mobilezx9 />
          <Tabletzx9 />

          <Mobilezx7 />
          <Tabletzx7 />
          <Tabletyx1 />
          <Mobileyx1 />
          <Mobilesummary />
          <Tabletsummary />
        </div>
        <MobileFooter />
        <Tabletfooter />
      </main>
    </div>
  );
}
