import React, {Component} from 'react'
import styled from "styled-components";
import mainImg from '../Assets/main.gif';
import { Link } from "react-router-dom";

const DivBody = styled.div`
    height:100vh;
    align-items:center;
    display:flex;
    justify-content:center;
`;
const Div = styled.div`
    height: 90vh;
    width:400px;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    line-height: 3rem;
    transition: all 1s linear
`;

const P = styled.p`
    font-size: 30px;
    font-weight: 900
`;


const Img = styled.img`
    width: 400px;
    height: 400px;
    margin: 15px;
    margin-bottom:50px;
`;

const DivP = styled.div`
    width: 400px;
    height: 100px;
    margin: 15px;
`;

const MyLink = styled(Link)`
    border-radius:10px;
    border:solid 1px;
    width: 400px;
    height:50px;
    color:white;
    background-color:black;
    text-decoration:none;
    font-size:20px;
    text-align:center;
    transition:opacity 0.3s linear;
    &:hover{
        opacity: 0.3;
    }
`;

class Main extends Component { 
  render(){
    return (
        <>
        <DivBody>
              <Div>
                <DivP>
                    <P>
                        롤링페이퍼로 <br/>
                        마음을 선물하세요.
                    </P>
                </DivP>
                <Img src={mainImg}/>
                <MyLink to='/celebrate'>
                        롤링페이퍼 생성 및 조회하기
                </MyLink>
            </Div>
        </DivBody>
        </>
    );
  }
}

export default Main;
