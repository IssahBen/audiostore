import { useNavigate } from "react-router-dom";
import DesktopNav from "../Home/Desktop/DesktopNav";
import MobileCategory from "../Home/Mobile/MobileCategory";
import Mobilefooter from "../Home/Mobile/MobileFooter";
import MobileNav from "../Home/Mobile/MobileNav";
import Mobilesummary from "../Home/Mobile/Mobilesummary";
import TabletNav from "../Home/Tablet/TabletNav";
import MobileOptionsZX9 from "./Mobile/MobileOptionsZX9";
import MobileVZX9 from "./Mobile/MobileVZX9";
import ZX9features from "./Mobile/ZX9features";
import TabletVzx9 from "./Tablet/TabletVzx9";
import Tzx9features from "./Tablet/Tzx9features";
import TabletOptionszx9 from "./Tablet/TabletOptionszx9";
import TabletCategory from "../Home/Tablet/TabletCategory";
import Tabletsummary from "../Home/Tablet/Tabletsummary";
import Tabletfooter from "../Home/Tablet/TabletFooter";

export default function VZX9() {
  const navigate = useNavigate();
  return (
    <div className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <main className="w-full h-full">
        <MobileNav />
        <DesktopNav />
        <TabletNav />
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="mt-5 text-ash manropemed pl-4 font-bold"
        >
          Go Back
        </button>
        <div className=" w-full flex flex-col px-5 bg-white space-y-8 ">
          <MobileVZX9 />
          <TabletVzx9 />
          <ZX9features />
          <Tzx9features />
          <MobileOptionsZX9 />
          <TabletOptionszx9 />
          <div className="">
            <MobileCategory />
            <TabletCategory />
          </div>
          <Mobilesummary />
          <div className="w-full  mediumhide largehide">
            <Tabletsummary />
          </div>
        </div>
        <div className="w-full h-[654px] mt-10 smallhide largehide">
          <Mobilefooter />
        </div>
        <div className="w-full h-[400px] mt-10 mediumhide largehide">
          <Tabletfooter />
        </div>
      </main>
    </div>
  );
}
