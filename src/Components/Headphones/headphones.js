import DesktopNav from "../Home/Desktop/DesktopNav";
import MobileCategory from "../Home/Mobile/MobileCategory";
import Mobilefooter from "../Home/Mobile/MobileFooter";
import MobileNav from "../Home/Mobile/MobileNav";
import Mobilesummary from "../Home/Mobile/Mobilesummary";
import TabletCategory from "../Home/Tablet/TabletCategory";
import Tabletfooter from "../Home/Tablet/TabletFooter";
import TabletNav from "../Home/Tablet/TabletNav";
import Tabletsummary from "../Home/Tablet/Tabletsummary";
import Mobile59 from "./Mobile/Mobile59";
import MobileMark1 from "./Mobile/MobileMark1";
import MobileMark2 from "./Mobile/MobileMark2";
import Tablet59 from "./Tablet/Tablet59";
import TabletMark1 from "./Tablet/TabletMark1";
import TabletMark2 from "./Tablet/TabletMark2";

export default function Headphones() {
  return (
    <div className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <main className="w-full h-full">
        <MobileNav />
        <DesktopNav />
        <TabletNav />
        <div className="w-full h-24 mb-10 flex justify-center items-center bg-black text-white manropebh4 font-semibold tracking-widest">
          HEADPHONES
        </div>
        <div className=" w-full flex flex-col px-5 bg-white space-y-8 ">
          <MobileMark2 />
          <TabletMark2 />
          <MobileMark1 />
          <TabletMark1 />
          <Mobile59 />
          <Tablet59 />
          <MobileCategory />
          <TabletCategory />
          <Mobilesummary />
          <Tabletsummary />
        </div>
        <Mobilefooter />
        <Tabletfooter />
      </main>
    </div>
  );
}
