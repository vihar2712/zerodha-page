import React from "react";
import UpperCard from "./UpperCard";
import {
  AVERAGES_GRAPH_IMAGE_LINK,
  OSCILLATORS_GRAPH_IMAGE_LINK,
  SUMMARY_GRAPH_IMAGE_LINK,
  SUPPORT_GRAPH_IMAGE_LINK,
} from "../links";
import LowerCard from "./LowerCard";
const CardList = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center mt-5">
        <UpperCard
          title={"Summary"}
          bgImage={SUMMARY_GRAPH_IMAGE_LINK}
          nature={true}
        />
        <UpperCard
          title={"Support & Resistance"}
          bgImage={SUPPORT_GRAPH_IMAGE_LINK}
          nature={false}
        />
      </div>
      <div className="flex flex-wrap justify-center my-6">
        <LowerCard
          title={"Moving Averages"}
          bearColor={{ bg: "orange-100", text: "orange-400" }}
          bullColor={{ bg: "blue-100", text: "blue-400" }}
          bgImage={AVERAGES_GRAPH_IMAGE_LINK}
          nature={true}
        />
        <LowerCard
          title={"Oscillators"}
          bearColor={{ bg: "red-100", text: "red-400" }}
          bullColor={{ bg: "blue-200", text: "blue-500" }}
          bgImage={OSCILLATORS_GRAPH_IMAGE_LINK}
          nature={true}
        />
      </div>
    </div>
  );
};

export default CardList;
