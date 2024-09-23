import DesktopNav from "../Home/Desktop/DesktopNav";
import MobileCategory from "../Home/Mobile/MobileCategory";
import Mobilefooter from "../Home/Mobile/MobileFooter";
import MobileNav from "../Home/Mobile/MobileNav";
import Mobilesummary from "../Home/Mobile/Mobilesummary";
import TabletNav from "../Home/Tablet/TabletNav";
import Mark2features from "./Mobile/Mark2features";
import MobileOptionsMark2 from "./Mobile/MobileOptionsMark2";
import MobileVMark2 from "./Mobile/MobileVMark2";

export default function VMARK2() {
  return (
    <div className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <main className="w-full h-full">
        <MobileNav />
        <DesktopNav />
        <TabletNav />

        <div className=" w-full flex flex-col px-5 bg-white space-y-8 ">
          <MobileVMark2 />
          <Mark2features />
          <MobileOptionsMark2 />
          <div className="w-ful">
            <MobileCategory />
          </div>
          <Mobilesummary />
        </div>
        <div className="w-full h-[654px] mt-10 smallhide largehide">
          <Mobilefooter />
        </div>
      </main>
    </div>
  );
}
