import DesktopNav from "../Home/Desktop/DesktopNav";
import MobileCategory from "../Home/Mobile/MobileCategory";
import Mobilefooter from "../Home/Mobile/MobileFooter";
import MobileNav from "../Home/Mobile/MobileNav";
import Mobilesummary from "../Home/Mobile/Mobilesummary";
import TabletNav from "../Home/Tablet/TabletNav";
import MobileOptionsYX1 from "./Mobile/MobileOptionsYX1";
import MobileVYX1 from "./Mobile/MobileVYX1";
import YX1features from "./Mobile/YX1features";
import { useNavigate } from "react-router-dom";
export default function VYX1() {
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
          <MobileVYX1 />
          <YX1features />
          <MobileOptionsYX1 />
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
