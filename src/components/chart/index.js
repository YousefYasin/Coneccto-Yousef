import React from "react";
import { Pie } from "@ant-design/charts";

const index = ({ data, innerTitle, height, title, width }) => {
  var config = {
    appendPadding: 10,
    data: data,
    angleField: "value",
    colorField: "type",

    radius: 1,
    innerRadius: 0.9,
    width: width,
    height: height,
    legend: false,

    label: {
      type: "inner",
      offset: "0px",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    statistic: {
      title: {
        style: {
          fontSize: 36,
          fontWeight: "bold",
          marginTop: "5px",
          //  color:'red'
        },
        content: title.num,
      },
      content: {
        style: {
          fontSize: 14,
          marginTop: "15px",
          color: "#9B9B9B",
        },
        content: title.time,
      },
    },
  };
  return (
    <div>
      <Pie {...config} />
    </div>
  );
};

export default index;
