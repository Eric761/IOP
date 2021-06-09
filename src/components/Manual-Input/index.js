import React from 'react';
import { Helmet } from "react-helmet";
import LoadData from "./LoadData/LoadData";
import LineData from "./LineData/LineData";
import Header from "../Header";

const ManualInput = () => {
    return (
        <>
        <Helmet>
        <title>Manual-Input | Reliability Indices Calculation </title>
        </Helmet>
        <Header />
        <div style={{display: "flex", flexDirection: "column",alignItems: "center",justifyContent: "center",backgroundColor: "rgba(177,169,138,1)"}}>
            <LoadData />
            <LineData />
        </div>
        </>
    )
}

export default ManualInput;
