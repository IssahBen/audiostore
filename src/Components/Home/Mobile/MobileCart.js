import { useEffect, useState } from "react";
import { useData } from "../../../Context/DataContext";
export default function MobileCart() {
  const [numberofitems, setNumberOfItems] = useState(0);
  const {
    numberOfMark1,
    setNumberOfMark1,
    numberOfMark2,
    setNumberOfMark2,
    numberOfxx59,
    setNumberOfxx59,
    numberOfZx7,
    setNumberOfZx7,
    numberOfZx9,
    setNumberOfZx9,
    numberOfYx1,
    setNumberOfYx1,
  } = useData();
  const total =
    numberOfMark2 * 2999 +
    numberOfMark2 * 1750 +
    numberOfxx59 * 899 +
    numberOfYx1 * 599 +
    numberOfZx7 * 3500 +
    numberOfZx9 * 4500;

  useEffect(() => {
    const list = [
      numberOfMark1,
      numberOfMark2,
      numberOfYx1,
      numberOfZx7,
      numberOfZx9,
      numberOfxx59,
    ];
    let items = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i] !== 0) {
        items += 1;
      }
    }
    setNumberOfItems(items);
  }, [
    numberOfMark1,
    numberOfMark2,
    numberOfYx1,
    numberOfZx7,
    numberOfZx9,
    numberOfxx59,
  ]);
  function Removeall() {
    setNumberOfMark1(0);
    setNumberOfMark2(0);
    setNumberOfYx1(0);
    setNumberOfZx7(0);
    setNumberOfZx9(0);
    setNumberOfYx1(0);
    setNumberOfxx59(0);
  }
  return (
    <div className="w-full h-full flex flex-col  space-y-2 px-10 py-5">
      <div className="flex w-full justify-between">
        <h2 className="text-black manropebh6 font-bold">CART{numberofitems}</h2>
        <p onClick={Removeall} className="manropemed text-ash underline">
          Remove all
        </p>
      </div>
      {numberOfMark1 === 0 ? "" : <Mark1 mark1s={numberOfMark1} />}
      {numberOfMark2 === 0 ? "" : <Mark2 mark2s={numberOfMark2} />}
      {numberOfxx59 === 0 ? "" : <Xx59 xx59s={numberOfxx59} />}
      {numberOfZx7 === 0 ? "" : <Zx7 zx7s={numberOfZx7} />}
      {numberOfZx9 === 0 ? "" : <Zx9 zx9s={numberOfZx9} />}
      {numberOfYx1 === 0 ? "" : <Yx1 yx1s={numberOfYx1} />}
      <div className="flex justify-between">
        <p className="font-medium text-ash manropebh6">Total</p>
        <p className="font-bold text-black manropebh5">${total}</p>
      </div>
      <button class="bg-brown hover:bg-hoverbrown text-white font-normal w-[271px] h-[48px] ">
        CHECKOUT
      </button>
    </div>
  );
}

function Mark2({ mark2s }) {
  return (
    <div className="flex w-full justify-between items-center ">
      <div className="flex space-x-2 items-center">
        <div className="w-[64px] h-[64px] cartmark2 bg-cover"></div>
        <div className="flex flex-col space-y-2">
          <p className="manropemed font-bold text-black">XX99 MK II</p>
          <p className="font-semi-bold text-ash">$ 2,999</p>
        </div>
      </div>
      <input
        value={mark2s}
        className="w-[96px] h-[32px] text-black bg-ashwhite text-center font-bold"
        type="text"
      />
    </div>
  );
}
function Mark1({ mark1s }) {
  return (
    <div className="flex w-full justify-between items-center ">
      <div className="flex space-x-2 items-center">
        <div className="w-[64px] h-[64px] cartmark1 bg-cover"></div>
        <div className="flex flex-col space-y-2">
          <p className="manropemed font-bold text-black">XX99 MK I</p>
          <p className="font-semi-bold text-ash">$ 1,750</p>
        </div>
      </div>
      <input
        value={mark1s}
        className="w-[96px] h-[32px] text-black bg-ashwhite text-center font-bold"
        type="text"
      />
    </div>
  );
}
function Xx59({ xx59s }) {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex space-x-2 items-center">
        <div className="w-[64px] h-[64px] cartxx59 bg-cover"></div>
        <div className="flex flex-col space-y-2">
          <p className="manropemed font-bold text-black">XX59</p>
          <p className="font-semi-bold text-ash">$899</p>
        </div>
      </div>
      <input
        value={xx59s}
        className="w-[96px] h-[32px] text-black bg-ashwhite text-center font-bold"
        type="text"
      />
    </div>
  );
}
function Zx7({ zx7s }) {
  return (
    <div className="flex w-full justify-between  items-center">
      <div className="flex space-x-2 items-center">
        <div className="w-[64px] h-[64px] cartzx7  bg-cover"></div>
        <div className="flex flex-col space-y-2">
          <p className="manropemed font-bold text-black">ZX7</p>
          <p className="font-semi-bold text-ash">$3,500</p>
        </div>
      </div>
      <input
        value={zx7s}
        className="w-[96px] h-[32px] text-black bg-ashwhite text-center font-bold"
        type="text"
      />
    </div>
  );
}
function Zx9({ zx9s }) {
  return (
    <div className="flex w-full justify-between items-center ">
      <div className="flex space-x-2 items-center">
        <div className="w-[64px] h-[64px] cartzx9 bg-cover"></div>
        <div className="flex flex-col space-y-2">
          <p className="manropemed font-bold text-black">ZX9</p>
          <p className="font-semi-bold text-ash">$4,500</p>
        </div>
      </div>
      <input
        value={zx9s}
        className="w-[96px] text-black h-[32px] bg-ashwhite text-center font-bold"
        type="text"
      />
    </div>
  );
}
function Yx1({ yx1s }) {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex space-x-2 items-center">
        <div className="w-[64px] h-[64px] cartyx1 bg-cover"></div>
        <div className="flex flex-col space-y-2">
          <p className="manropemed font-bold text-black">YX1</p>
          <p className="font-semi-bold text-ash">$4,500</p>
        </div>
      </div>
      <input
        value={yx1s}
        className="w-[96px] h-[32px] bg-ashwhite text-center  text-black font-bold"
        type="text"
      />
    </div>
  );
}
