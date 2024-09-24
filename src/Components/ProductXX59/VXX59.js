import { useNavigate } from "react-router-dom";
import DesktopNav from "../Home/Desktop/DesktopNav";
import MobileCategory from "../Home/Mobile/MobileCategory";
import Mobilefooter from "../Home/Mobile/MobileFooter";
import MobileNav from "../Home/Mobile/MobileNav";
import Mobilesummary from "../Home/Mobile/Mobilesummary";
import TabletNav from "../Home/Tablet/TabletNav";

import M59features from "./Mobile/M59features";
import MobileVXX59 from "./Mobile/MobileVXX59";
import MobileOptions59 from "./Mobile/MobileOptions59";

export default function VXX59() {
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
          <MobileVXX59 />
          <M59features />
          <MobileOptions59 />
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
