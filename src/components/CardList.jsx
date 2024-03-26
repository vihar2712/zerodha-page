import React from "react";
import Card from "./Card";
import {
  AVERAGES_GRAPH_IMAGE_LINK,
  OSCILLATORS_GRAPH_IMAGE_LINK,
  SUMMARY_GRAPH_IMAGE_LINK,
  SUPPORT_GRAPH_IMAGE_LINK,
} from "../links";
const CardList = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6">
        <Card title={"Summary"} bgImage={SUMMARY_GRAPH_IMAGE_LINK} />
        <Card
          title={"Support & Resistance"}
          bgImage={SUPPORT_GRAPH_IMAGE_LINK}
        />
        <Card title={"Moving Averages"} bgImage={AVERAGES_GRAPH_IMAGE_LINK} />
        <Card title={"Oscillators"} bgImage={OSCILLATORS_GRAPH_IMAGE_LINK} />
      </div>
    </div>
  );
};

export default CardList;
