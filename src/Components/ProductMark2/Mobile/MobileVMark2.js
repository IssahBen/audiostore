import { useState } from "react";

export default function MobileVMark2() {
  const [numberofmark2, setNumberofMark2] = useState(1);
  return (
    <div className="w-full flex flex-col space-y-8 h-[724px] mt-5 smallhide largehide">
      <div className="w-full h-[352px] mobilevmark2 bg-cover"></div>
      <div className="flex flex-col w-full items-start space-y-4">
        <p className="text-brown manropereg tracking-[10px]">NEW PRODUCT</p>
        <p className="tracking-wide manropebh4  font-bold">
          XX99 MARK II HEADPHONES
        </p>
        <p className=" text-ash manropemed leading-6">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <p className=" manropebh5 font-bold">$2,999</p>
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
