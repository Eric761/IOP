import React, { useState,useEffect } from 'react';
import { Helmet } from "react-helmet";
import LoadData from "./LoadData/LoadData";
import LineData from "./LineData/LineData";
import { Link } from "react-router-dom";
import {Container,ContentBtn} from "./InputElements";

let loadData = [];
let lineData = [];
const Input = ({title,isCustom,handleResult}) => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);

    // Passing Data from Child to Parent
    const handleCallbackLoadData = (childData) => {
        loadData = childData;
    }
    const handleCallbackLineData = (childData) => {
        lineData = childData;
    }

    return (
        <>
        <Helmet>
            <title>{title} | Reliability Indices Calculation </title>
        </Helmet>
        <Container>
            <LoadData isCustom={isCustom} parentCallbackLoadData={handleCallbackLoadData} />
            <LineData isCustom={isCustom} parentCallbackLineData={handleCallbackLineData} />
            <ContentBtn>
                    <Link to="/result" onClick={handleResult}>Calculate Reliability Indices</Link>
            </ContentBtn>
        </Container>
        </>
    )
}

export default Input;
export { loadData,lineData };
