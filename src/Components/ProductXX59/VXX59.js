import DesktopNav from "../Home/Desktop/DesktopNav";
import MobileCategory from "../Home/Mobile/MobileCategory";
import Mobilefooter from "../Home/Mobile/MobileFooter";
import MobileNav from "../Home/Mobile/MobileNav";
import Mobilesummary from "../Home/Mobile/Mobilesummary";
import TabletNav from "../Home/Tablet/TabletNav";
import MobileOptionsMark1 from "../ProductMark1/Mobile/MobileOptionsMark1";
import M59features from "./Mobile/M59features";
import MobileVXX59 from "./Mobile/MobileVXX59";

export default function VXX59() {
  return (
    <div className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <main className="w-full h-full">
        <MobileNav />
        <DesktopNav />
        <TabletNav />

        <div className=" w-full flex flex-col px-5 bg-white space-y-8 ">
          <MobileVXX59 />
          <M59features />
          <MobileOptionsMark1 />
          <div className="">
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
