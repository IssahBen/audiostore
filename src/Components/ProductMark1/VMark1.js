import { useNavigate } from "react-router-dom";
import DesktopNav from "../Home/Desktop/DesktopNav";
import MobileCategory from "../Home/Mobile/MobileCategory";
import Mobilefooter from "../Home/Mobile/MobileFooter";
import MobileNav from "../Home/Mobile/MobileNav";
import Mobilesummary from "../Home/Mobile/Mobilesummary";
import TabletNav from "../Home/Tablet/TabletNav";
import Mark1features from "./Mobile/Mark1features";
import MobileOptionsMark1 from "./Mobile/MobileOptionsMark1";
import MobileVMark1 from "./Mobile/MobilevMark1";

export default function VMARK1() {
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
          <MobileVMark1 />
          <Mark1features />
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
