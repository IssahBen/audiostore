import { useState } from "react";

export default function DesktopVzx7() {
  const [numberofmark2, setNumberofMark2] = useState(1);
  return (
    <div className="w-full flex  h-[560px] space-x-14 items-center  mt-5 desktophide">
      <div className="w-full h-[560px] desktopvzx7 bg-cover"></div>
      <div className="flex flex-col w-full items-start space-y-4">
        <p className="text-brown manropereg tracking-[10px]">NEW PRODUCT</p>
        <div className="flex flex-col">
          <p className="tracking-wide manropebh4  font-bold">ZX7</p>
          <p className="tracking-wide manropebh4  font-bold">SPEAKER</p>
        </div>
        <p className=" text-ash manropemed leading-6">
          Stream high quality sound wirelessly with minimal to no loss. The ZX7
          speaker uses high-end audiophile components that represents the top of
          the line powered speakers for home or studio use.
        </p>
        <p className=" manropebh5 font-bold">$3,500</p>
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
