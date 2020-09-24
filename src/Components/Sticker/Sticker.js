import React from 'react';
import styled from "styled-components";
import goBackImg from './goBack.png';
import Img1 from './main_sticker_01.png';
import Img2 from './main_sticker_02.png';
import Img3 from './main_sticker_03.png';
import Img4 from './main_sticker_04.png';
import Img5 from './main_sticker_05.png';
import {withRouter } from "react-router-dom"; 


const Div = styled.div`
  width:100vw;
  min-height:100vh;
  background-color:rgba(99, 96, 88);
  display:flex;
  justify-content: center;
`;

const InDiv = styled.div`
  padding-top:32px;
  min-height:100vh;
  min-width: 350px;
  max-width: 400px;
  paddin-top:32px;
`;

const StickerDiv = styled.div`
  width: 100%;
  color:white;
  margin-top:20px;
`;


const TopDiv = styled.div`
  width:80%;
  margin-left:20px;
`;


const GoBack = styled.img`
  height:20px;
  width:16px;
  &:hover{
    cursor:pointer;
  }
`;


function Sticker({handleImgClick,handleGoback}){
  return  <Div> 
              <InDiv>
                <TopDiv>
                    <GoBack onClick={()=>handleGoback()} src={goBackImg} alt="not"/>
                </TopDiv> 
                <StickerDiv>
                  <img onClick={()=>handleImgClick(Img1)} style={{maxHeight:'110px',maxWidth:'110px'}} src={Img1} alt="not"/>
                  <img onClick={()=>handleImgClick(Img2)} style={{maxHeight:'110px',maxWidth:'110px'}} src={Img2} alt="not"/>
                  <img onClick={()=>handleImgClick(Img3)} style={{maxHeight:'110px',maxWidth:'110px'}} src={Img3} alt="not"/>
                  <img onClick={()=>handleImgClick(Img4)} style={{maxHeight:'110px',maxWidth:'110px'}} src={Img4} alt="not"/>
                  <img onClick={()=>handleImgClick(Img5)} style={{maxHeight:'110px',maxWidth:'110px'}} src={Img5} alt="not"/>
                </StickerDiv>
              </InDiv>
          </Div>
}

export default withRouter(Sticker);