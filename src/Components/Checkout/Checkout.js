import DesktopNav from "../Home/Desktop/DesktopNav";
import MobileCart from "../Home/Mobile/MobileCart";

import MobileNav from "../Home/Mobile/MobileNav";

import TabletNav from "../Home/Tablet/TabletNav";
import { useNavigate } from "react-router-dom";

import Invoice from "./Invoice";
import MobileCheckout from "./MobileCheckout";
import Mobilefooter from "../Home/Mobile/MobileFooter";
import TabletCheckout from "./TabletCheckout";
import Tabletfooter from "../Home/Tablet/TabletFooter";
import DesktopCheckout from "./DesktopCheckout";
import Desktopfooter from "../Home/Desktop/DesktopFooter";
export default function Checkout() {
  const navigate = useNavigate();
  return (
    <div className="relative w-screen h-screen overflow-y-auto flex flex-col bg-tintwhite">
      <main className="w-full h-full bg-tintwhite">
        <MobileNav />
        <DesktopNav />
        <TabletNav />
        <div
          id="overlay"
          className="w-full h-lvh absolute z-10 hidden overflow-hidden bg-black opacity-80"
        ></div>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="mt-5 text-ash manropemed pl-4 font-bold"
        >
          Go Back
        </button>
        <MobileCheckout />
        <TabletCheckout />
        <DesktopCheckout />
        <div className="w-full h-[654px] mt-20 smallhide largehide">
          <Mobilefooter />
        </div>
        <div className="w-full h-[400px] mt-20 mediumhide largehide">
          <Tabletfooter />
        </div>
        <div className="w-full h-[365px] mt-20 desktophide">
          <Desktopfooter />
        </div>
      </main>
    </div>
  );
}
