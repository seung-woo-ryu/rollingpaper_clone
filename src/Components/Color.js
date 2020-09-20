import React from 'react';
import styled from "styled-components";

const ColorBox = styled.div`
    display:${props => (props.showListCurrent === props.boxName ? "box" :"none")};
    width:${props => (props.colorType === props.current ? '36' :'24')}px;
    height:${props => (props.colorType === props.current ? '36' :'24')}px;
    border-radius: 50%;
    border:1px solid white;
    background-color:${props => props.colorType};
    margin-right:10px;
`;

const Color = ({colorType,current,handleColorClick,showListCurrent,boxName}) =>(
    <ColorBox showListCurrent={showListCurrent} boxName={boxName} current={current} onClick={()=>(handleColorClick(colorType))} colorType={colorType}/>
);

export default Color