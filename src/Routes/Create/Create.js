import React, {Component} from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";


const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
  border-bottom:1px solid;
`;

const DivBody = styled.div`
    height:100vh;
    align-items:center;
    display:flex;
    justify-content:center;
    transition: all 1s ease;
`;

const Div = styled.div`
    height: 90vh;
    width: 400px;
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
    font-size: 34px;
    font-weight: 700
    
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

class Create extends Component { 
    state = {
        id: '',
        pw: ''
    }
    
    handleChnage = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
      return (
          <>
          <DivBody>
              <Div>
                  <DivP>
                      <Form>
                      <P>
                          받을 사람은<br/>
                          <Input placeholder="이름 혹은 애칭" name="id" value={this.state.id} onChange={this.handleChnage}/><br/>
                          이에요.
                      </P>
                      </Form>
                      <br/>
                      <br/>
                      <P>
                          우리만의 신호는<br/>
                          <Input maxlength="4" name="pw" value={this.state.pw} onChange={this.handleChnage} type="password" placeholder="비밀번호"/><br/>
                          이에요.
                      </P>
                  </DivP>

                  <MyLink to={{pathname:'/main2',state:{ id: this.state.id, pw:this.state.pw}}}>
                            생성 및 조회하기
                  </MyLink>
              </Div>
          </DivBody>
          </>
      );
    }
}

export default Create;
