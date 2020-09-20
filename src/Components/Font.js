import React from 'react';
import styled from "styled-components";

const FontBox = styled.div`
    height:34px;
    color:${props => (props.currentfont === props.fontType ? 'black' : 'white')};
    font-size:20px;
    font-family:'${props=>props.fontType}';
    width:98px;
    margin:5px;
    display:${props => (props.showListCurrent === props.boxName ? "flex" :"none")};
    justify-content:center;
    align-items:center;
    border-radius:6px;
    border:solid #fff 1px;
    background-color:${props => (props.currentfont === props.fontType ? 'white' : 'inherit')};
`;

const Font = ({currentfont,handleFontClick,fontType,name,showListCurrent,boxName}) =>(
    <FontBox currentfont={currentfont} fontType={fontType} onClick={()=>{handleFontClick(fontType)}} showListCurrent={showListCurrent} boxName={boxName}>
        {name}
    </FontBox>
);


export default Font;