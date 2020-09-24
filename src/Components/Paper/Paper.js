import React, {useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import Draggable from 'react-draggable';

import goBackImgBlack from './goBackBlack.png';
import btn from './button3.png';

import Card from '../Card';

import { DB_API } from "../../api";


const Div = styled.div`
    padding-top:32px;
    width: 450px;
    min-height:100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    min-height:72px;
    width:400px;
    display:flex;
    justify-content:space-between;
    align-items: center;
`;
const Content = styled.div`
    height:80vh;    
    min-width:400px;
    max-width:428px;
    width:428px;
    padding-top:30px;
    margin-top:30px;
    
    position:relative;
    display: grid;
    grid-template-columns: repeat(3,150px);
    grid-auto-rows: 150px;
    gap: 10px;
    
    border-radius: 30px;    
    background-color:white;

    overflow-x:hidden;
`;
const Name = styled.div``;
const H1 = styled.h1`
    font-size:30px;
    font-weight:700;
`;
const P = styled.p`
    font-size:15px;
    font-weight:700;
`;
const Button = styled.button`
    border-radius:7px;
    border:solid 1px;
    width: 87px;
    height:30px;
    font-size:15px;
    font-weight:700;
`;
const Button2 = styled(Link)`
    display:flex;
    align-items:center;
    justify-content:center;
    text-decoration:none;
    border-radius:5px;
    background-color:black;
    color:white;
    width: 324px;
    height:56px;
    font-size:20px;
    font-weight:700;
    transition:opacity 0.3s linear;
    &:hover{
        opacity: 0.3;
    }
    cursor:pointer;
`;


const Button3 = styled.button`
    border-radius:5px;
    width:56px;
    height:56px;
    font-weight:700;
    border:solid1px;
    background-color:white;
    background-image:url(${btn});
    background-size:100% 100%;
`;

const TopDiv = styled.div`
  width:80%;
  height:72px;
  display:flex;
  align-item:flex-end;
  margin-left:20px;
`;


const GoBack = styled.img`
  height:20px;
  width:16px;
  &:hover{
    cursor:pointer;
  }
`;



const FixedDIv = styled.div`
    position: fixed;
    bottom: 0;
    width:400px;
    height:100px;
    display:flex;
    justify-content:space-between;
    align-items: center;
    z-dinex:100;
`
;

const ImgDiv = styled.img`
  width:110px;
  height:110px;
  border:2px solid black;
`;

const Bnt = styled.div`
    position:fixed;
    bottom:30px;
    color:white;
    height: 56px;
    max-width: 364px;
    min-width: 125px;
    width:364px;
    background: #222;
    box-shadow: none;
    margin-top: 8px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 10px;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:opacity 0.3s linear;
    &:hover{
        opacity: 0.3;
    }
    cursor:pointer;
}
`;


const Img = styled.img`
position:absolute;
top:0;
left:0;
transform: translate(${p=>p.x}px,${p=>p.y}px);
`;



function Paper({resultsEmoji,handleGoback,emoji,emojiURL,id,results,pw,handleClick}){
    const [activeDrags,setactiveDrags] = useState(0);
    const [deltaX,setactivdeltaX] = useState(0);
    const [deltaY,setactivdeltaY] = useState(0);
    const onStart = () => {
        setactiveDrags(activeDrags+1);
      };
    const onStop = () => {
        setactiveDrags(activeDrags-1);
      };

    const handleDrag = (e,ui) =>{
        setactivdeltaX(deltaX+ui.deltaX);
        setactivdeltaY(deltaY+ui.deltaY);
    }

    const dragHandlers = {onDrag:handleDrag,onStart: onStart, onStop: onStop};

    const handleSubmit = ()=> {
        DB_API.saveEmoji(id,pw,deltaX, deltaY,emojiURL);        
        handleGoback();
    };

/** 
    {
        
    } */
    return <>
        <Div>
            <Header>
                {
                    emoji ? 
                    <TopDiv>
                        <GoBack onClick={()=>handleGoback()} src={goBackImgBlack} alt="not"/>
                    </TopDiv> 
                    :
                    <>
                        <Name>
                            <H1>to. {id}</H1><br/><br/>
                            <P> {id}님을 축하해주세요!</P>
                        </Name>
                        <Button>
                            공유하기
                        </Button>
                    </>
                }
                
            </Header>
            <Content className="box">
                {results && results.length > 0 &&(results.map((result,idx) =>(
                    <Card
                    fr= {result.fr} 
                    fontType ={result.fontType}
                    color={result.color} 
                    backgroundColor={result.backgroundcolor} 
                    content={result.content}
                    ndeg={result.ndeg}
                    key = {idx}
                />)))}
                {resultsEmoji &&
                    resultsEmoji.map((result,idx)=>(
                        <Img x={result.deltaX} y={result.deltaY} style={{width:'110px',height:"110px",zIndex:1}}src={result.emoji} key={idx}/>
                    ))}
                {
                    emoji &&
                    <Draggable positionOffset={{x:0,y:0}} bounds="parent" {...dragHandlers}>                        
                        <ImgDiv style={{position:'absolute',top:'30px'}} draggable="true" src={emojiURL} className="box">
                        </ImgDiv>
                    </Draggable>
                }
            </Content>
            {
                !emoji ?
                <FixedDIv>
                    <Button3 onClick={()=>handleClick()}/>
                    <Button2 to={{pathname:'/editor',state:{id:id, pw:pw}}}>
                        <div>롤링페이퍼 작성하기</div>
                    </Button2>
                </FixedDIv>
                :
                <Bnt onClick={()=>handleSubmit()}>
                    완료
                </Bnt>
            }
        </Div>
    </>
}

export default Paper;