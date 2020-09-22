import React from 'react';
import styled from "styled-components";
const ImgBox = styled.img`
    width:${props => props.width}px;
    height:${props => props.height}px;
    &:hover{
        cursor:pointer;
    }
`;
const Img = ({onPaperClick,onClick,width,height,src,imgName}) =>(
    <ImgBox onClick={()=>{typeof(onClick)==='function' ? onClick(): onPaperClick(imgName)}} width={width} height={height} src={src}/>
);

export default Img;