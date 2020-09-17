import React, {Component} from 'react'
import styled from "styled-components";
import { Link,Route,BrowserRouter } from "react-router-dom";
import TextareaAutosize from 'react-autosize-textarea';

import writingPaper from '../../Assets/writingPaper.png';
import text from '../../Assets/text.png';
import font from '../../Assets/font.png';
import goBack from '../../Assets/goBack.png';
import align from '../../Assets/align.png';
import color from '../../Assets/color.png';

const DivBody = styled.div`
    height:100vh;
    align-items:center;
    display:flex;
    justify-content:center;
    background-color:${props => props.bgcolor};
`;

const Div = styled.div`
    width: 450px;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    width:400px;
    height:60px;
    display:${props => props.display};
    justify-content:space-between;
    font-size:18px;
    font-weight:bold;
    margin-top:30px;
    margin-bottom:30px;
`;
const DivIcon = styled.div`
  
  display:flex;
  justify-content:space-between;
`;
const Icon = styled.img`

  width:38px;
  height:50px;
`;
const Content = styled.div`
    width:380px;
    height:380px;
    border-radius: 10px;
    display:flex;
    background-color:rgb(244, 244, 244);
    justify-content:center;
    align-items:center;
`;

const Textarea = styled(TextareaAutosize)`
  width:360px;
  outline:none;
  background:inherit;
  resize:none;
  overflow:hidden;
  border:none;
  text-align:center;
  font-size:20px;
  font-family:'강부장님체';
`;

const Span = styled.span`
  display:flex;
  align-items:center;
  font-size:20px;
`;
const Footer = styled.div`
  display:${props => props.display};
  width:100%;
`;
const DivFrom = styled.div`
  margin-top:28px;
  width:100 %;
  font-size 30px;
  text-align:right;
  font-weight:lighter;
`;
const DivBnt = styled.div`
  display:flex;
  width:100%;
  height:35vh;
  justify-content:flex-end;
  align-items:flex-end;
  padding:10px;
`;
const Input = styled.input`
  border: none;
  width:100px;
  border-bottom:solid 1px grey;
  font-size: 22px;
  outline: none;
`;
const Button = styled.div`

  width:135px;
  height:65px;
  font-size:22px;
  font-weight:bold;
  border-radius:10px;
  background:black;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  transition:opacity 0.3s linear;
  &:hover{
      opacity: 0.3;
  }
  cursor: pointer
`;

const HeaderHidden = styled.div`
  width:400px;
  height:60px;
  display:${props => props.display};
  justify-content:space-between;
  margin-top:40px;
  margin-bottom:30px;
  background-color:inherit;
`;

const Img = styled.img`
width:${props => props.width}px;
height:${props => props.width}px;
`;

const CompleteDiv = styled.div`
  font-size:22px;
  color:white;
`;

const FooterHidden = styled.div`
  height:350px;  
  display:flex;
  flex-direction:column;
  jusitfy-content:center;
  align-items:center;
  border: solid 1px;
`;
const FontDiv = styled.div`
  width:100%;
  height:10px;
  border:solid 1px;
`;
const SelectList = styled.div`
  display:flex;
  justify-content:center;
  width:470px;
  height:70px;
  background:rgba(0, 0, 0, 0.3);
  
`;


const In = styled.div`
  width:40%;
  height:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;


class Editor extends Component { 
  
  state ={
    height: 40,
    bgcolor:'white',
    header:'flex',
    headerHidden:'none',
    footer:'block',
    footerHidden:'none'
  }
  
  toggle = false;
  textarea = React.createRef();
  
  handleClick = (e) =>{
    this.textarea.current.focus();
    this.toggle = true;
    
    if(this.toggle){
      this.setState({
        bgcolor:'rgb(102, 102, 102)',
        header:'none',
        headerHidden:'flex',
        footer:'none',
        footerHidden:'flex'
      });
    }
  }
  
  render(){
    return (
        <>
          <DivBody bgcolor={this.state.bgcolor}ref={this.divBody}>
            <Div>
              <Header display={this.state.header}ref={this.Header} >
                <Span >
                  취소
                </Span>
                <DivIcon>
                  <Icon src={text}/>
                  <Icon src={writingPaper}/>
                </DivIcon>
              </Header>
      
              <HeaderHidden display={this.state.headerHidden}>
                <Img width={24} height={28} src={goBack}/>
                <CompleteDiv>
                  완료
                </CompleteDiv>
              </HeaderHidden>

              <Content onClick={this.handleClick}>
                <Textarea ref={this.textarea} maxRows={14} />
              </Content>
              
              <Footer display={this.state.footer} ref={this.footer}>
                <DivFrom>
                  From.  
                  <Input placeholder="보내는 이"/>
                </DivFrom>
                <DivBnt>
                  <Button>
                    저장
                  </Button>
                </DivBnt>
              </Footer>

              <FooterHidden display={this.state.footerHidden}>
                <FontDiv>
12321321  s
                </FontDiv>
                <SelectList>
                  <In>
                    <Img width={50} height={50} src={font} />
                    <Img width={50} height={50} src={align}/>
                    <Img width={50} height={50} src={color}/>
                  </In>
                </SelectList>
              </FooterHidden>
            </Div>
          </DivBody>
        </>
    );
  }
}

export default Editor;
