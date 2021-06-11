import React from 'react';
import {Bar} from 'react-chartjs-2';

const BarChart = ({xData,yData,label,text}) => {
    const state1 = {
        labels: xData,
        datasets: [
          {
            label: label,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: yData
          },
        ]
      };
    return (
        <>
            <Bar
                data={state1}
                options={{
                    title:{
                    display:true,
                    text: text,
                    fontSize: 2
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
                }}
            /> 
        </>
    )
}

export default BarChart;
