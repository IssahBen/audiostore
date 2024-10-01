import { useState } from "react";
import { useData } from "../../../Context/DataContext";
export default function MobileVMark1() {
  const [mark1s, setMark1s] = useState(0);
  const [setNumberOfMark1] = useData();
  return (
    <div className="w-full flex flex-col space-y-8 h-[724px] mt-5 smallhide largehide">
      <div className="w-full h-[352px] mobilevmark1 bg-cover"></div>
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
            value={mark1s}
            onChange={(e) => {
              setMark1s(e.target.value);
            }}
            className="w-[120px] bg-ashwhite text-center font-bold"
            type="text"
          />
          <button
            onClick={() => {
              setNumberOfMark1(mark1s);
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
