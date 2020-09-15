import React, {Component} from 'react'
import styled from "styled-components";
import { Link,Route,BrowserRouter } from "react-router-dom";
import Paper from "../../Components/Paper"
const DivBody = styled.div`
    height:100vh;
    align-items:center;
    display:flex;
    justify-content:center;
    background-color:#F2F2F2;
`;

class Main2 extends Component { 
  render(){
    return (
        <>
        <DivBody>
            <Paper/>
        </DivBody>
        </>
    );
  }
}

export default Main2;
