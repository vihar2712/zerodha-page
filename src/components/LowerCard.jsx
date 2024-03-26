import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { POINTER_IMAGE_LINK } from "../links";

const LowerCard = ({ title, bgImage, nature, bearColor, bullColor }) => {
  return (
    <div className="p-3 flex flex-col gap-8 w-[500px] bg-white shadow-md sm:ml-5 mb-5 lg:mb-0">
      <div className="flex justify-between">
        <h1 className="font-semibold">{title}</h1>
        <IoMdInformationCircleOutline className="text-gray-400 hover:text-blue-600" />
      </div>
      <div className="relative flex justify-center items-center">
        <img src={bgImage} className="w-80" alt="bgImage" />
        <img
          src={POINTER_IMAGE_LINK}
          className="w-4 absolute left-[172px] z-10"
          alt="pointer"
        />
      </div>
      <div
        className={
          nature
            ? "flex justify-center gap-6 visible"
            : "flex justify-center gap-6 invisible"
        }
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm">6</p>
          <h1
            className={`px-3 bg-${bearColor.bg} text-${bearColor.text} rounded-md text-sm`}
          >
            Bearish
          </h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm">10</p>
          <h1 className="px-3 bg-gray-200 text-gray-500 rounded-md text-sm">
            Neutral
          </h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm">11</p>
          <h1
            className={`px-3 bg-${bullColor.bg} text-${bullColor.text} rounded-md text-sm`}
          >
            Bullish
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-5 text-sm">
        <div className="flex justify-between px-10">
          <div className="flex gap-1 items-center">
            <h1 className="bg-blue-100 py-1 px-2 text-xs text-blue-400 rounded-sm">
              B
            </h1>
            <h1>EMA (5)</h1>
          </div>
          <div>
            <h1>22024.23</h1>
          </div>
        </div>
        <div className="flex justify-between px-10 ">
          <div className="flex gap-1 items-center">
            <h1 className="bg-blue-100 py-1 px-2 text-xs text-blue-400 rounded-sm">
              B
            </h1>
            <h1>EMA (5)</h1>
          </div>
          <div>
            <h1>22024.23</h1>
          </div>
        </div>
        <div className="text-gray-400 flex justify-end cursor-pointer">
          <div className="flex items-center hover:text-blue-500">
            <h1>View Details </h1>
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerCard;
