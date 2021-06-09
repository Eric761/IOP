import React from 'react';
import { Helmet } from "react-helmet";
import LoadData from "./LoadData/LoadData";
import LineData from "./LineData/LineData";
import Header from "../Header";

const CustomInput = () => {
    return (
        <>
        <Header />
        <div style={{display: "flex", flexDirection: "column",alignItems: "center",justifyContent: "center",backgroundColor: "rgba(177,169,138,1)"}}>
            <Helmet>
            <title>Custom-Input | Reliability Indices Calculation </title>
            </Helmet>
            <LoadData />
            <LineData />
        </div>
        </>
    )
}

export default CustomInput;
