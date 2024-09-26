import { useState } from "react";

export default function TabletVMark1() {
  const [numberofmark2, setNumberofMark2] = useState(1);
  return (
    <div className="w-full flex  h-[480px] space-x-14 items-center  mt-5 mediumhide largehide">
      <div className="w-full h-[480px] tabletvmark1 bg-cover"></div>
      <div className="flex flex-col w-full items-start space-y-4">
        <p className="text-brown manropereg tracking-[10px]">NEW PRODUCT</p>
        <p className="tracking-wide manropebh4  font-bold">
          XX99 MARK I HEADPHONES
        </p>
        <p className=" text-ash manropemed leading-6">
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>
        <p className=" manropebh5 font-bold">$1,750</p>
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
