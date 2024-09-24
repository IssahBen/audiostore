import { useState } from "react";

export default function MobileVZX9() {
  const [numberofmark2, setNumberofMark2] = useState(1);
  return (
    <div className="w-full flex flex-col space-y-8 h-[724px] mt-14 smallhide largehide">
      <div className="w-full h-[352px] mobilevzx9 bg-cover"></div>
      <div className="flex flex-col w-full items-start space-y-4">
        <p className="text-brown manropereg tracking-[10px]">NEW PRODUCT</p>
        <div className="flex flex-col">
          <p className="tracking-wide manropebh4  font-bold">XX59 </p>
          <p className="tracking-wide manropebh4  font-bold"> HEADPHONES</p>
        </div>
        <p className=" text-ash manropemed leading-6">
          Upgrade your sound system with the all new ZX9 active speaker. It’s a
          bookshelf speaker system that offers truly wireless connectivity --
          creating new possibilities for more pleasing and practical audio
          setups.
        </p>
        <p className=" manropebh5 font-bold">$4500</p>
        <div className="flex h-[48px] w-[296px] space-x-2">
          <input
            value={numberofmark2}
            onChange={(e) => {
              setNumberofMark2(e.target.value);
            }}
            className="w-[120px] bg-ashwhite text-center font-bold"
            type="text"
          />
          <button class="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-4 ">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
