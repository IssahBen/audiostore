import DesktopNav from "../Home/Desktop/DesktopNav";
import MobileCart from "../Home/Mobile/MobileCart";

import MobileNav from "../Home/Mobile/MobileNav";

import TabletNav from "../Home/Tablet/TabletNav";
import { useNavigate } from "react-router-dom";

import Invoice from "./Invoice";
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
        <div
          id="body"
          className="w-full  flex flex-col  space-y-5 smallhide largehide px-4 py-4  mx-auto "
        >
          <div className="w-full h-full flex-col  space-y-2 bg-white">
            {" "}
            <div className="w-full h-full flex flex-col bg-white px-5  pt-8  space-y-10">
              {" "}
              <p className="font-bold manropebh4 ">Checkout</p>
              <BillingDetails />
              <ShippingInfo />
              <PaymentDetails />
            </div>
            <div className="w-full h-full ">
              <Invoice />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function BillingDetails() {
  return (
    <div className="flex flex-col w-full space-y-4">
      <p className="manropebh6 font-medium text-brown">BILLING DETAILS</p>
      <div className="flex flex-col   space-y-2 w-full ">
        <p className="text-black">Name</p>
        <input type="text" className="w-[280px] h-[56px] border-2 rounded-lg" />
      </div>
      <div className="flex flex-col   space-y-2 w-full ">
        <p className="text-black">Phone Number</p>
        <input type="text" className="w-[280px] h-[56px] border-2 rounded-lg" />
      </div>
    </div>
  );
}
function ShippingInfo() {
  return (
    <div className="flex flex-col w-full space-y-4">
      <p className="manropebh6 font-medium text-brown">SHIPPING INFO</p>
      <div className="flex flex-col   space-y-2 w-full ">
        <p className="text-black">Your Address</p>
        <input type="text" className="w-[280px] h-[56px] border-2 rounded-lg" />
      </div>
      <div className="flex flex-col   space-y-2 w-full ">
        <p className="text-black">Zip Code</p>
        <input type="text" className="w-[280px] h-[56px] border-2 rounded-lg" />
      </div>

      <div className="flex flex-col   space-y-2 w-full ">
        <p className="text-black">City </p>
        <input type="text" className="w-[280px] h-[56px] border-2 rounded-lg" />
      </div>
      <div className="flex flex-col   space-y-2 w-full ">
        <p className="text-black">Country</p>
        <input type="text" className="w-[280px] h-[56px] border-2 rounded-lg" />
      </div>
    </div>
  );
}

function PaymentDetails() {
  return (
    <div className="flex flex-col w-full space-y-4">
      <p className="manropebh6 font-medium text-brown">PAYMENT DETAILS</p>
      <div className="flex flex-col   space-y-2 w-full ">
        <p className="text-black">Name on Card</p>
        <input type="text" className="w-[280px] h-[56px] border-2 rounded-lg" />
      </div>
      <div className="flex flex-col   space-y-2 w-full ">
        <p className="text-black">Card Number</p>
        <input type="text" className="w-[280px] h-[56px] border-2 rounded-lg" />
      </div>
      <div className="flex flex-col w-full">
        <p className="text-black mb-2 ">Card Details</p>
        <div className="flex   w-full  justify-center   h-[50px]">
          <div className="w-1/2  flex  flex-col justify-center space-y-2 ">
            <p className="text-black">Cvv</p>
            <input
              type="text"
              className="w-[80px] h-[80px] border-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col w-1/2  space-y-2 p">
            <p className="text-black">Expiry Details</p>

            <div className="flex">
              <div className="w-1/2">
                <input
                  type="text"
                  className="w-[30px] h-[30px] border-2 rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  className="w-[30px] h-[30px] border-2 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
