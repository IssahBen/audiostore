import MobileNav from "./MobileNav";
import headphonepic from "../../images/home/mobile/headphone.png";
import earphonepic from "../../images/home/mobile/earphone.png";
import speakerpic from "../../images/home/mobile/speaker.png";
import zx9 from "../../images/home/mobile/image-speaker-zx9.png";
export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <main className="w-full h-full">
        <MobileNav />
        <MobileHero />
        <div className=" w-full flex flex-col px-5 bg-white ">
          <MobileCategory />
          <Mobilezx9 />
          <Mobilezx7 />
          <Mobileyx1 />
          <Summary />
        </div>
      </main>
    </div>
  );
}

function MobileHero() {
  return (
    <div className="  flex justify-center items-center  md:hidden mobilehero w-full h-[750px] bg-cover ">
      <div className="flex flex-col space-y-2  items-center w-2/3 h-80 ">
        <p className="font-thin text-ashwhite tracking-[10px] manropesub">
          New Product
        </p>
        <p className="manropebh2 text-center tracking-widest font-bold text-white">
          XX99 MARK II HEADPHONES
        </p>
        <p className="manropereg text-center text-extratintwhite font-thin tracking-wide">
          Experience natural,lifelike audio and exceptional build quality made
          for the passionate music enthusiast
        </p>
        <button class="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-10 ">
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}

function MobileCategory() {
  return (
    <div className=" w-full h-full flex flex-col space-y-16 mt-20 ">
      <Headphones />
      <Speakers />
      <Earphones />
    </div>
  );
}

function Headphones() {
  return (
    <div className=" w-full h-44  flex flex-col relative items-center bg-extratintwhite rounded-md space-y-2 ">
      <img
        src={headphonepic}
        alt=""
        className="h-48 w-48 absolute top-[-80px]"
      />
      <p className="text-black manropebh6 font-bold tracking-wide pt-20">
        HEADPHONES
      </p>
      <a href="#home" className="flex space-x-2 mt-2 items-center">
        <p className="text-ash font-semibold ">SHOP</p>
        <p className="font-extrabold text-brown">{">"}</p>
      </a>
    </div>
  );
}
function Speakers() {
  return (
    <div className=" w-full h-44  flex flex-col relative items-center bg-extratintwhite rounded-md space-y-2 ">
      <img src={speakerpic} alt="" className="h-48 w-48 absolute top-[-80px]" />
      <p className="text-black manropebh6 font-bold tracking-wide pt-20">
        SPEAKERS
      </p>
      <a href="#home" className="flex space-x-2 mt-2 items-center">
        <p className="text-ash font-semibold ">SHOP</p>
        <p className="font-extrabold text-brown">{">"}</p>
      </a>
    </div>
  );
}
function Earphones() {
  return (
    <div className=" w-full h-44  flex flex-col relative items-center bg-extratintwhite rounded-md space-y-2 ">
      <img
        src={earphonepic}
        alt=""
        className="h-48 w-48 absolute top-[-80px]"
      />
      <p className="text-black manropebh6 font-bold tracking-wide pt-20">
        EARPHONES
      </p>
      <a href="#home" className="flex space-x-2 mt-2 items-center">
        <p className="text-ash font-semibold ">SHOP</p>
        <p className="font-extrabold text-brown">{">"}</p>
      </a>
    </div>
  );
}

function Mobilezx9() {
  return (
    <div className="w-full h-full flex flex-col space-y-4 circles items-center bg-cover bg-no-repeat bg-brown py-8 mt-24">
      <img src={zx9} alt="" className="w-44 h-52" />
      <div className="flex flex-col space-y-0 font-extrabold text-white tracking-widest">
        <p className="manropebh4 text-center">ZX9</p>
        <p className="manropebh4 text-center">SPEAKER</p>
      </div>
      <p className="font-thin tracking-wide text-center text-extratintwhite">
        Upgrade to premium speakers that are phoenomenally built to deliver
        truly remarkable sound
      </p>
      <button class="bg-black text-white font-normal py-4 px-10 ">
        SEE PRODUCT
      </button>
    </div>
  );
}

function Mobilezx7() {
  return (
    <div className="flex flex-col  space-y-10 justify-center w-full h-80 zx7 bg-cover px-4 mt-10 rounded-md">
      <p className="manropebh4 tracking-widest font-extrabold">ZX7 SPEAKER</p>
      <button class=" w-48  border-2 border-black text-black font-bold py-4 px-2 ">
        SEE PRODUCT
      </button>
    </div>
  );
}

function Mobileyx1() {
  return (
    <div className="flex flex-col space-y-8 w-full  mt-10">
      <div className="w-full h-52 yx1 bg-cover rounded-md"></div>
      <div className="flex flex-col  space-y-10 justify-center w-full h-52 bg-extratintwhite px-4 rounded-md">
        <p className="manropebh4 tracking-widest font-extrabold">
          YX1 EARPHONES
        </p>
        <button class=" w-48  border-2 border-black text-black font-bold py-4 px-2 ">
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}

function Summary() {
  return (
    <div className="w-full flex flex-col mt-24 bg-tintwhite mb-24">
      <div className="w-full h-[300px] hero bg-cover"></div>
      <div className="flex flex-col items-center space-y-10 mt-10">
        <p className="text-center manropebh3 font-extrabold">
          BRINGING YOU THE <span className="text-brown">BEST</span> AUDIO GEAR
        </p>
        <p className="manropemed font-semibold text-center tracking-wider">
          Located at the heart of New York City,Audiophile is the premier
          storefor high end headphones,earphones,speakers, and audio
          accessories.We have a large showroom and luxury demonstration rooms
          available for you to browse and experience awide range of our
          porducts.Stop by our store to meet some of the fantastic people who
          make Audiophile the best place to buy your portable audio equipment
        </p>
      </div>
    </div>
  );
}
