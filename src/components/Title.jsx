import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoMdArrowRoundDown } from "react-icons/io";
import { NIFTY_LOGO_LINK } from "../links";

const Title = () => {
  return (
    <div className="flex md:w-[500px] md:ml-24 mt-24 gap-2">
      <MdOutlineKeyboardArrowLeft className="font-semibold text-3xl cursor-pointer" />
      <div className="flex flex-col">
        <div className="flex gap-2">
          <img src={NIFTY_LOGO_LINK} alt="nifty-logo" className="w-6" />
          <h1 className="text-2xl font-semibold">NIFTY 50</h1>
        </div>
        <div className="flex gap-2 text-sm">
          <h1>₹ 22042.25</h1>
          <div className="flex items-center">
            <IoMdArrowRoundDown className="text-red-500 text-lg" />
            <h1 className="text-red-500">(-0.25%)</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
