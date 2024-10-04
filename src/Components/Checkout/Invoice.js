import { useEffect, useState } from "react";
import { useData } from "../../Context/DataContext";
import { NavLink, useNavigate } from "react-router-dom";
export default function Invoice() {
  const [numberofitems, setNumberOfItems] = useState(0);
  const [sum, setSum] = useState(0);
  const [vat, setVat] = useState(0);
  const navigate = useNavigate();
  const [grandtotal, setGrandTotal] = useState(0);
  const shipping = 50;
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

  useEffect(() => {
    const list = [
      numberOfMark1,
      numberOfMark2,
      numberOfYx1,
      numberOfZx7,
      numberOfZx9,
      numberOfxx59,
    ];
    const total =
      numberOfMark2 * 2999 +
      numberOfMark1 * 1750 +
      numberOfxx59 * 899 +
      numberOfYx1 * 599 +
      numberOfZx7 * 3500 +
      numberOfZx9 * 4500;
    setSum(total);
    setVat(total * 13.016);
    setGrandTotal(total + vat + shipping);

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

  function Checkout() {
    navigate("/checkout");
  }

  return (
    <div className="w-full h-full flex flex-col  space-y-2 px-5 py-5">
      <div className="flex w-full justify-between">
        <h2 className="text-black manropebh6 font-bold">
          CART({numberofitems})
        </h2>
      </div>
      {numberOfMark1 === 0 ? (
        ""
      ) : (
        <Mark1 mark1s={numberOfMark1} setmark1={setNumberOfMark1} />
      )}
      {numberOfMark2 === 0 ? (
        ""
      ) : (
        <Mark2 mark2s={numberOfMark2} setmark2={setNumberOfMark2} />
      )}
      {numberOfxx59 === 0 ? (
        ""
      ) : (
        <Xx59 xx59s={numberOfxx59} setxx59={setNumberOfxx59} />
      )}
      {numberOfZx7 === 0 ? (
        ""
      ) : (
        <Zx7 zx7s={numberOfZx7} setzx7={setNumberOfZx7} />
      )}
      {numberOfZx9 === 0 ? (
        ""
      ) : (
        <Zx9 zx9s={numberOfZx9} setzx9={setNumberOfZx9} />
      )}
      {numberOfYx1 === 0 ? (
        ""
      ) : (
        <Yx1 yx1s={numberOfYx1} setyx1={setNumberOfYx1} />
      )}
      <div className="flex justify-between">
        <p className="font-medium text-ash manropebh6">TOTAL</p>
        <p className="font-thin text-black manropebh5">$ {sum}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-medium text-ash manropebh6">SHIPPING</p>
        <p className="font-thin text-black manropebh5">$ {shipping}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-medium text-ash manropebh6">TAX</p>
        <p className="font-thin text-black manropebh5">$ {vat}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-medium text-ash manropebh6">GRAND TOTAL</p>
        <p className="font-thin text-black manropebh5">$ {grandtotal}</p>
      </div>
      <button class="bg-brown hover:bg-hoverbrown text-white font-normal w-[271px] h-[48px] ">
        PURCHASE
      </button>
    </div>
  );
}

function Mark2({ mark2s, setmark2 }) {
  return (
    <div className="flex w-full justify-between items-center ">
      <div className="flex space-x-2 items-center">
        <div className="w-[64px] h-[64px] cartmark2 bg-cover"></div>
        <div className="flex flex-col space-y-2">
          <p className="manropemed font-bold text-black">XX99 MK II</p>
          <p className="font-semi-bold text-ash">$ 2,999</p>
        </div>
      </div>
      <div className="flex  bg-ashwhite items-center px-5">
        <p>x{mark2s}</p>
      </div>
    </div>
  );
}
function Mark1({ mark1s, setmark1 }) {
  return (
    <div className="flex w-full justify-between items-center ">
      <div className="flex space-x-2 items-center">
        <div className="w-[64px] h-[64px] cartmark1 bg-cover"></div>
        <div className="flex flex-col space-y-2">
          <p className="manropemed font-bold text-black">XX99 MK I</p>
          <p className="font-semi-bold text-ash">$ 1,750</p>
        </div>
      </div>
      <div className="flex  bg-ashwhite items-center px-5">
        <p>x{mark1s}</p>
      </div>
    </div>
  );
}
function Xx59({ xx59s, setxx59 }) {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex space-x-2 items-center">
        <div className="w-[64px] h-[64px] cartxx59 bg-cover"></div>
        <div className="flex flex-col space-y-2">
          <p className="manropemed font-bold text-black">XX59</p>
          <p className="font-semi-bold text-ash">$899</p>
        </div>
      </div>
      <div className="flex  bg-ashwhite items-center px-5">
        <p>x{xx59s}</p>
      </div>
    </div>
  );
}
function Zx7({ zx7s, setzx7 }) {
  return (
    <div className="flex w-full justify-between  items-center">
      <div className="flex space-x-2 items-center">
        <div className="w-[64px] h-[64px] cartzx7  bg-cover"></div>
        <div className="flex flex-col space-y-2">
          <p className="manropemed font-bold text-black">ZX7</p>
          <p className="font-semi-bold text-ash">$3,500</p>
        </div>
      </div>
      <div className="flex  bg-ashwhite items-center px-5">
        <p>x{zx7s}</p>
      </div>
    </div>
  );
}
function Zx9({ zx9s, setzx9 }) {
  return (
    <div className="flex w-full justify-between items-center ">
      <div className="flex space-x-2 items-center">
        <div className="w-[64px] h-[64px] cartzx9 bg-cover"></div>
        <div className="flex flex-col space-y-2">
          <p className="manropemed font-bold text-black">ZX9</p>
          <p className="font-semi-bold text-ash">$4,500</p>
        </div>
      </div>
      <div className="flex  bg-ashwhite items-center px-5">
        <p>x{zx9s}</p>
      </div>
    </div>
  );
}
function Yx1({ yx1s, setyx1 }) {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex space-x-2 items-center">
        <div className="w-[64px] h-[64px] cartyx1 bg-cover"></div>
        <div className="flex flex-col space-y-2">
          <p className="manropemed font-bold text-black">YX1</p>
          <p className="font-semi-bold text-ash">$4,500</p>
        </div>
      </div>
      <div className="flex  bg-ashwhite items-center px-5">
        <p>x{yx1s}</p>
      </div>
    </div>
  );
}
