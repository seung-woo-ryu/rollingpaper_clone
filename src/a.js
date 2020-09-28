import React, {Component} from 'react'
import styled, { keyframes } from "styled-components";

const k = keyframes`
    0%{
        transform: translateX(-30px)
    }
    100%{
        transform: translateX(100px)
    }
`;

const Div = styled.div`
    position:relative;
    width:500px;
    height:500px;    
    background:grey;
    animation: ${k} 1s ease-in 1;
`;

class Main extends Component { 
  render(){
    return (
        <>
        <Div>

        </Div>
        </>
    );
  }
}

export default Main;
