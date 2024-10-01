import { useState } from "react";
import { useData } from "../../../Context/DataContext";
export default function TabletVMark2() {
  const [mark2s, setMark2s] = useState(0);
  const { setNumberOfMark2 } = useData();
  return (
    <div className="w-full flex  h-[480px] space-x-14 items-center  mt-5 mediumhide largehide">
      <div className="w-full h-[480px] tabletvmark2 bg-cover"></div>
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
            value={mark2s}
            onChange={(e) => {
              setMark2s(e.target.value);
            }}
            className="w-[120px] bg-ashwhite text-center font-bold"
            type="text"
          />
          <button
            onClick={() => {
              setNumberOfMark2(mark2s);
            }}
            class="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-4 "
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
