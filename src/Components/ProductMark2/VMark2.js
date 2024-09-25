import { useNavigate } from "react-router-dom";
import DesktopNav from "../Home/Desktop/DesktopNav";
import MobileCategory from "../Home/Mobile/MobileCategory";
import Mobilefooter from "../Home/Mobile/MobileFooter";
import MobileNav from "../Home/Mobile/MobileNav";
import Mobilesummary from "../Home/Mobile/Mobilesummary";
import TabletNav from "../Home/Tablet/TabletNav";
import Mark2features from "./Mobile/Mark2features";
import MobileOptionsMark2 from "./Mobile/MobileOptionsMark2";
import MobileVMark2 from "./Mobile/MobileVMark2";
import TabletVMark2 from "./Tablet/TabletVMark2";
import TMark2features from "./Tablet/TMark2features";
import TabletOptionsMark2 from "./Tablet/TabletOptionsMark2";
import TabletCategory from "../Home/Tablet/TabletCategory";
import Tabletsummary from "../Home/Tablet/Tabletsummary";
import Tabletfooter from "../Home/Tablet/TabletFooter";

export default function VMARK2() {
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
          <MobileVMark2 />
          <TabletVMark2 />
          <Mark2features />
          <TMark2features />
          <MobileOptionsMark2 />
          <TabletOptionsMark2 />
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
