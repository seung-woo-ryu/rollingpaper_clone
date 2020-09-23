import React from 'react';
import styled from "styled-components";
import photo from '../Routes/Editor/photo_add.png';

const PhotoBox = styled.label`
    width:380px;
    height:380px;
    border-radius: 10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color: grey;
    cursor: pointer;
    font-size:18px;
    line-height:32px;
    font-weight:bold;
    color: white;
    background-img
`;

const Img = styled.img`
    width:${props => typeof(props.width)==="number" ? props.width +'px' : 'inherit'};
    height:${props => typeof(props.height)==="number" ? props.width +'px' : 'inherit'};
    border-radius: 10px;
`;

const Input = styled.input`
    visibility:hidden;
`;

function Photo({handleUploadImg,width=104,height=104,uploadImg=null}){
    return <>
        <PhotoBox>
            <Input type="file" onChange={handleUploadImg} style={{display:"none"}}/>
            <Img width={width ? width : 104} height={height ? height : 104} src={uploadImg ? uploadImg : photo}/>
                <span style={{display:uploadImg ? 'none': 'inline'}}>이곳을 클릭해 사진을 추가하세요.</span>        
        </PhotoBox>
    </>;
}


export default Photo;