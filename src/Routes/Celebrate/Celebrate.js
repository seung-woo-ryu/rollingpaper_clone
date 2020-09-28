import React, {Component} from 'react'
import styled,{keyframes} from "styled-components";
import { Link } from "react-router-dom";
import { DB_API } from "../../api";

const DivBody = styled.div`
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const TransformBox = keyframes`
    0%{
        transform: translateX(-100px)
    }
    100%{
        transform: translateX(0px)
    }
`;
const Div = styled.div`
    width:400px;
    height: 90vh;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    line-height: 3rem;
    animation: ${TransformBox} 0.5s ease-in 1;
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
    state ={
        num: 0,
        cnt: 0
    }

    async componentWillMount(){
        try{
            const v = DB_API.peopleCNT();
            v.then((e)=>{
                const cnt = e.data.results[1][0].cnt
                const num = e.data.results[0][0].num
                this.setState({cnt,num})
            });
        }catch{
            console.log("Create Coponenentwillmount error")
        }
    }

  render(){
      const {num,cnt} = this.state;
    return (
        <>
        <DivBody>
            <Div>
                <DivP>
                    <P>
                        지금까지<br/>
                        {num}명이 작성하고<br/>
                        {cnt}개의 축하인사가<br/>
                        작성되었어요!
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
