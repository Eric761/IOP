import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import LoadData from "./LoadData/LoadData";
import LineData from "./LineData/LineData";
import Header from "../Header";
import { Link } from "react-router-dom";
import {ContentBtn} from "./InputElements";

const Input = ({title,isCustom,handleResult}) => {
    useEffect(() => {
        window.scrollTo(0,0);
    })

    return (
        <>
        <div style={{display: "flex", flexDirection: "column",alignItems: "center",justifyContent: "center",backgroundColor: "rgba(177,169,138,1)"}}>
            <Helmet>
            <title>{title} | Reliability Indices Calculation </title>
            </Helmet>
            <LoadData isCustom={isCustom} />
            <LineData isCustom={isCustom} />
            <ContentBtn>
                    <Link to="/result" onClick={handleResult}>Calculate Reliability Indices</Link>
            </ContentBtn>
        </div>
        </>
    )
}

export default Input;
