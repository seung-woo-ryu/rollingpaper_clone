import React, {Componenet} from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { Link} from "react-router-dom";

const CardDiv = styled.div`
    width:130px;
    height:130px;
    border-radius:5px;
    background-color:${props => props.bgColor};
    font-family: ${props => props.fontType};
    color:${props => props.color};
    display: flex;
    border:1px solid;
    justify-content:center;
    align-items: center;
    transform:rotate(${props => props.ndeg}deg);
    transition: all ease 0.5s;
    &:hover{
        transform:rotate(0deg);
    }
`;

const Card = ({fr,fontType,color,backgroundColor,content,ndeg}) => (
    <CardDiv color={color} fontType={fontType} bgColor={backgroundColor} ndeg={ndeg}>
        <div>
            {content}
        </div>
    </CardDiv>
)


export default Card;