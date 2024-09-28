import { useNavigate } from "react-router-dom";
export default function Desktopzx7() {
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/speakers/zx7");
  }
  return (
    <div className="flex flex-col  space-y-10 justify-center w-full h-80 desktopzx7 bg-cover px-4 mt-10 rounded-md desktophide">
      <p className="manropebh4 tracking-widest font-extrabold">ZX7 SPEAKER</p>
      <button
        onClick={HandleClick}
        class=" w-48  border-2 border-black text-black font-bold py-4 px-2  hover:bg-black hover:text-white"
      >
        SEE PRODUCT
      </button>
    </div>
  );
}
