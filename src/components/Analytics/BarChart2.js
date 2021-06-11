import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ xData, yData1, yData2, label1, label2, text }) => {
  const state2 = {
    labels: xData,
    datasets: [
      {
        label: label1,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: yData1,
      },
      {
        label: label2,
        backgroundColor: "rgba(255,140,0,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: yData2,
      },
    ],
  };
  return (
    <>
      <Bar
        data={state2}
        options={{
          title: {
            display: true,
            fontColor: 'white',
            text: text,
          },
          legend: {
            display: true,
            position: "right",
            labels: {
              fontColor: "white",
              fontSize: 18,
            },
          },
        }}
      />
    </>
  );
};

export default BarChart;
