import { useState } from "react";

export default function DesktopVMark2() {
  const [numberofmark2, setNumberofMark2] = useState(1);
  return (
    <div className="w-full flex  h-[560px] space-x-14 items-center  mt-5 desktophide">
      <div className="w-full h-[560px] desktopvmark2 bg-cover"></div>
      <div className="flex flex-col w-full items-start space-y-4">
        <p className="text-brown manropereg tracking-[10px]">NEW PRODUCT</p>
        <div className="flex flex-col">
          <p className="tracking-wide manropebh4  font-bold">XX99 MARK II</p>
          <p className="tracking-wide manropebh4  font-bold">HEADPHONES</p>
        </div>
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
