import React from 'react';
import {readExcel,calculate_indices} from "./CalculateData/helperFn";
import {loadData,lineData} from '../Input';

const Result = () => {
    console.log(loadData,lineData);
    let tempObj = readExcel(loadData,lineData);
    const { bus, link, N, La, addInfo } = tempObj;
    let ans = calculate_indices(bus, link, N, La, addInfo);
    console.log(ans);

    return (
        <>
        {lineData.map((data) => {
            return `<h1>${data.S}</h1>`;
        })}
        </>
    )
}

export default Result;
