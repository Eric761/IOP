import React from 'react'
import { loadData, lineData } from "../Input";
import {Bar,Pie,Doughnut} from 'react-chartjs-2';
import { readExcel, calculate_indices } from "./CalculateData/helperFn";
import fn from './sug';

const Graph = () => {
    console.log(loadData, lineData);
    let tempObj = readExcel(loadData, lineData);
    const { bus, link, N, La, addInfo } = tempObj;
    let ans = calculate_indices(bus, link, N, La, addInfo);
    console.log(ans);
    // const xData = ['TENS','AENS'];
    console.log(fn());
    const xData = ['SAIFI','SAIDI','CAIDI','ASAI','ASUI'];
    const yData1 = [];
    for(let i=0;i<7;i++){
      if(i===3 || i===4){
        continue;
      }
      yData1.push(ans[i]);
    }
    const {fr,ot,cb} = fn();
    console.log(fr,ot,cb);
    const yData2 = [];
    for(let i=0;i<7;i++){
      if(i===3 || i===4){
        continue;
      }
      if(cb){
      yData2.push(cb[1].ansIndices[i]);
    }
    }
    // const yData2 = fr[0].ansIndices;
    console.log(xData,yData1);

    
    const state = {
    labels: xData,
    datasets: [
      {
        label: 'Actual Indices',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: yData1
      },
      {
        label: 'Suggested Indices (wrt Circuit Breaker - SAIDI)',
        backgroundColor: 'rgba(255,140,0,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: yData2
      }
    ]
  };
  
// const state = {
//   labels: xData,
//   datasets: [
//     {
//       label: 'No. of consumers',
//       backgroundColor: [
//         '#B21F00',
//         '#C9DE00',
//         '#2FDE00',
//         '#00A6B4',
//         '#6800B4'
//       ],
//       hoverBackgroundColor: [
//       '#501800',
//       '#4B5000',
//       '#175000',
//       '#003350',
//       '#35014F'
//       ],
//       data: yData
//     }
//   ]
// }
    
    return (
        <div style={{marginTop: "10vh",marginLeft: "auto",marginRight: "auto",width: "82vw",height: "70vh",display: "flex",alignItems: "center",justifyContent: "center"}}>
            <Bar
            data={state}
            options={{
                title:{
                display:true,
                text:'Changing Failure Rate',
                fontSize:5
                },
                legend:{
                display:true,
                position:'right'
                }
            }}
            />
            {/* <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'No. of consumers per bus',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        /> */}
        </div>
    )
}

export default Graph;
