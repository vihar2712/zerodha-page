import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { POINTER_IMAGE_LINK } from "../links";

const Card = ({ title, bgImage }) => {
  return (
    <div className="p-3 flex flex-col gap-8 w-[500px] bg-white shadow-md">
      <div className="flex justify-between">
        <h1 className="font-semibold">{title}</h1>
        <IoMdInformationCircleOutline className="text-gray-400 hover:text-blue-600" />
      </div>
      <div className="relative flex justify-center items-center">
        <img src={bgImage} className="w-80" alt="bgImage" />
        <img
          src={POINTER_IMAGE_LINK}
          className="w-4 absolute left-[172px]"
          alt="pointer"
        />
      </div>
      <div className="flex justify-center gap-6">
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
        <div className="flex justify-center flex-wrap gap-24">
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
        <div className="flex justify-center flex-wrap gap-24">
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
