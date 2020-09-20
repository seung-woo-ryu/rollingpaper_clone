import React from 'react';
import styled from "styled-components";

const AlignBox = styled.div`
    color:white;
    font-size:${props=>(props.currentalign===props.alignType ? "35" : '20')}px;
    font-weight:700;
    width:98px;
    margin:5px;
    display:${props => (props.showListCurrent === props.boxName ? "flex" :"none")};
    justify-content:center;
    align-items:center;
`;

const Align = ({handleAlignClick,currentalign,alignType,name,showListCurrent,boxName}) =>(
    <AlignBox currentalign={currentalign} onClick={()=>{handleAlignClick(alignType)}} alignType={alignType} showListCurrent={showListCurrent} boxName={boxName}>
        {name}
    </AlignBox>
);


export default Align;