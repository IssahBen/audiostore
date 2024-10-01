import { useState } from "react";
import { useData } from "../../../Context/DataContext";
export default function TabletVyx1() {
  const [yx1s, setYx1s] = useState(0);
  const { setNumberOfYx1 } = useData();
  return (
    <div className="w-full flex  h-[480px] space-x-14 items-center  mt-5 mediumhide largehide">
      <div className="w-full h-[480px] tabletvyx1 bg-cover"></div>
      <div className="flex flex-col w-full items-start space-y-4">
        <p className="text-brown manropereg tracking-[10px]">NEW PRODUCT</p>
        <div className="flex flex-col">
          <p className="tracking-wide manropebh4  font-bold">YX1 WIRELESS </p>
          <p className="tracking-wide manropebh4  font-bold">EARPHONES</p>
        </div>
        <p className=" text-ash manropemed leading-6">
          Tailor your listening experience with bespoke dynamic drivers from the
          new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
          in noisy environments with its active noise cancellation feature.
        </p>
        <p className=" manropebh5 font-bold">$599</p>
        <div className="flex h-[48px] w-[296px] space-x-2">
          <input
            value={yx1s}
            onChange={(e) => {
              setYx1s(e.target.value);
            }}
            className="w-[120px] bg-ashwhite text-center font-bold"
            type="text"
          />
          <button
            onClick={() => {
              setNumberOfYx1(yx1s);
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
