import React from 'react';
import styled from "styled-components";
import checkedImg from '../Routes/Editor/paperColorCheck.png';
const PaperColorBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:167px;
    height:141px;
    border-radius:4px;
    background-color:${props => props.paperColorType};
    &:hover{
        cursor:pointer;
    }
`;
const Img = styled.img`
    width: 60px;
    height: 60px;
    display: ${props=> props.paperColorType === props.curpapercolor? 'inline' : 'none'};
`;

const PaperColor = ({handlePaperColorDivClick, paperColorType,curpapercolor}) =>(
    <PaperColorBox paperColorType={paperColorType} onClick={()=>handlePaperColorDivClick(paperColorType)}>
        <Img paperColorType={paperColorType} curpapercolor={curpapercolor} src={checkedImg}/>
    </PaperColorBox>
);

export default PaperColor;