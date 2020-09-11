import React, {Component} from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const DivBody = styled.div`
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Div = styled.div`
    width:400px;
    height: 90vh;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    line-height: 3rem;
`;

const DivP = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    height:400px;
    width: 400px;
`;

const P = styled.p`
    font-size: 30px;
    font-weight: 900
`;

const MyLink = styled(Link)`
    align-self:start-end;
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

class Celebrate extends Component { 
  render(){
    return (
        <>
        <DivBody>
            <Div>
                <DivP>
                    <P>
                        지금까지<br/>
                        xxx명이 작성하고<br/>
                        997명이 축하를<br/>
                        받았어요!
                    </P>
                </DivP>

                <MyLink to='/create'>
                          다음
                </MyLink>
            </Div>
        </DivBody>
        </>
    );
  }
}

export default Celebrate;
