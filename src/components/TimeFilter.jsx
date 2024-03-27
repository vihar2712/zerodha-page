import { useState } from "react";
import { useDispatch } from "react-redux";
import {  changeTimeDuration } from "../redux/timeSlice";

const TimeFilter = () => {
  const dispatch = useDispatch();
  const [clickedBtn, setClickedBtn] = useState("1day");
  const changeTime = (e) => {
    setClickedBtn(e.target.id);
    dispatch(changeTimeDuration(e.target.id));
  };
  return (
    <div className="flex justify-center bg-white shadow-md w-fit mx-auto text-gray-400 font-semibold text-sm rounded-md my-5">
      <button
        className={
          "rounded-lg p-2" +
          (clickedBtn === "5min" ? " bg-[#387ED1] text-white" : "")
        }
        id="5min"
        onClick={changeTime}
      >
        {clickedBtn === "5min" ? "5 Minutes" : "5 min"}
      </button>
      <button
        className={
          "rounded-lg p-2" +
          (clickedBtn === "10min" ? " bg-[#387ED1] text-white" : "")
        }
        id="10min"
        onClick={changeTime}
      >
        {clickedBtn === "10min" ? "10 Minutes" : "10 min"}
      </button>
      <button
        className={
          "rounded-lg p-2" +
          (clickedBtn === "15min" ? " bg-[#387ED1] text-white" : "")
        }
        id="15min"
        onClick={changeTime}
      >
        {clickedBtn === "15min" ? "15 Minutes" : "15 min"}
      </button>
      <button
        className={
          "rounded-lg p-2" +
          (clickedBtn === "30min" ? " bg-[#387ED1] text-white" : "")
        }
        id="30min"
        onClick={changeTime}
      >
        {clickedBtn === "30min" ? "30 Minutes" : "30 min"}
      </button>
      <button
        className={
          "rounded-lg p-2" +
          (clickedBtn === "1hr" ? " bg-[#387ED1] text-white" : "")
        }
        id="1hr"
        onClick={changeTime}
      >
        {clickedBtn === "1hr" ? "1 Hour" : "hour"}
      </button>
      <button
        className={
          "rounded-lg p-2 " +
          (clickedBtn === "1day" ? " bg-[#387ED1] text-white" : "")
        }
        id="1day"
        onClick={changeTime}
      >
        {clickedBtn === "1day" ? "1 Day" : "day"}
      </button>
    </div>
  );
};

export default TimeFilter;
