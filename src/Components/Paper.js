import React from 'react';
import styled from "styled-components";
import btn from '../Assets/button3.png';
import Card from './Card';
import { Link} from "react-router-dom";

const Div = styled.div`
width: 450px;
height:100%;
display:flex;
flex-direction: column;
align-items: center;
`;

const Header = styled.div`
    margin-top:30px;
    height:15%;
    width:400px;
    display:flex;
    justify-content:space-between;
    align-items: center;
`;
const Content = styled.div`
    padding-top:30px;
    display: grid;
    grid-template-columns: repeat(3,150px);
    grid-auto-rows: 150px;
    gap: 10px;
    border-radius: 30px;
    width:450px;
    height:100%;    
    background-color:white;
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

const FixedDIv = styled.div`
    position: fixed;
    bottom: 0;
    width:400px;
    height:100px;
    display:flex;
    justify-content:space-between;
    align-items: center;
`
;

const Paper = ({id,results,pw}) => (
    <Div>
        <Header>
            <Name>
                <H1>to. {id}</H1><br/><br/>
                <P> {id}님을 축하해주세요!</P>
            </Name>
            <Button>
                공유하기
            </Button>
        </Header>
        <Content>
            {results && results.length > 0 &&(results.map((result,idx) =>(
            <Card 
                fr= {result.fr} 
                fontType ={result.fontType}
                color={result.color} 
                backgroundColor={result.backgroundcolor} 
                content={result.content}
                ndeg={result.ndeg}
                key = {idx}
            /> 
            )))}
        </Content>
        <FixedDIv>
            <Button3/>
            <Button2 to={{pathname:'/editor',state:{id:id, pw:pw}}}>
                <div>롤링페이퍼 작성하기</div>
            </Button2>
        </FixedDIv>
    </Div>
)

export default Paper;