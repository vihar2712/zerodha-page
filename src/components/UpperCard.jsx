import { IoMdInformationCircleOutline } from "react-icons/io";
import { POINTER_IMAGE_LINK } from "../links";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Card = ({ title, bgImage, nature }) => {
  const [pointerLocation, setPointerLocation] = useState(272);
  const { currentTime } = useSelector((store) => store.time);
  useEffect(() => {
    console.log("inside useEffect");
    switch (currentTime) {
      case "5min":
        setPointerLocation(250);
        break;
      case "10min":
        setPointerLocation(350);
        break;
      case "15min":
        setPointerLocation(100);
        break;
      case "30min":
        setPointerLocation(75);
        break;
      case "1hr":
        setPointerLocation(210);
        break;
      default:
        setPointerLocation(272);
        break;
    }
  }, [currentTime]);

  console.log(currentTime, pointerLocation);
  return (
    <div className="p-3 flex flex-col gap-8 w-[500px] bg-white shadow-md sm:ml-5 mb-5 lg:mb-0">
    <div className="p-3 flex flex-col gap-8 w-[500px] bg-white shadow-md sm:ml-5 mb-5 lg:mb-0">
      <div className="flex justify-between">
        <h1 className="font-semibold">{title}</h1>
        <IoMdInformationCircleOutline className="text-gray-400 hover:text-blue-600" />
      </div>
      <div className="relative flex justify-center items-center">
        <img src={bgImage} className="w-80" alt="bgImage" />
        <img
          src={POINTER_IMAGE_LINK}
          className="w-4 absolute transition-all 2s ease-in-out"
          style={{ left: pointerLocation + "px" }}
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
      <div
        className={
          nature
            ? "flex justify-center gap-6 visible"
            : "flex justify-center gap-6 invisible"
        }
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm">6</p>
          <h1 className="px-3 bg-red-200 text-red-500 rounded-md text-sm">
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
          <h1 className="px-3 bg-green-200 text-green-500 rounded-md text-sm">
            Bullish
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-center flex-wrap gap-10 sm:gap-24">
        <div className="flex justify-center flex-wrap gap-10 sm:gap-24">
          <div>
            <h1 className="text-sm">22072.66</h1>
            <p className="text-xs text-gray-500">EMA (20)</p>
          </div>
          <div>
            <h1 className="text-sm">22072.66</h1>
            <p className="text-xs text-gray-500">EMA (20)</p>
          </div>
          <div>
            <h1 className="text-sm">22072.66</h1>
            <p className="text-xs text-gray-500">EMA (20)</p>
          </div>
        </div>
        <div className="flex justify-center flex-wrap  gap-10 sm:gap-24">
        <div className="flex justify-center flex-wrap  gap-10 sm:gap-24">
          <div>
            <h1 className="text-sm">22072.66</h1>
            <p className="text-xs text-gray-500">EMA (20)</p>
          </div>
          <div>
            <h1 className="text-sm">22072.66</h1>
            <p className="text-xs text-gray-500">EMA (20)</p>
          </div>
          <div>
            <h1 className="text-sm">22072.66</h1>
            <p className="text-xs text-gray-500">EMA (20)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
