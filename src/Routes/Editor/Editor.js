import React, {Component} from 'react'
import styled from "styled-components";
import TextareaAutosize from 'react-autosize-textarea';

import Font from '../../Components/Font';
import Align from '../../Components/Align';
import Color from '../../Components/Color';

import writingPaper from './writingPaper.png';
import text from './text.png';
import goBack from './goBack.png';
import align from './align_normal.png';
import align_focus from './align_focus.png';
import color_focus from './color_focus.png';
import color from './color_normal.png';
import font_focus from './font_focus.png';
import font from './font_normal.png';

const DivBody = styled.div`
    height:100vh;
    align-items:center;
    display:flex;
    justify-content:center;
    background-color:${props => props.bgcolor ==='hidden' ? 'rgb(102, 102, 102)' : 'white'};
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
    display:flex;
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
  overflow:hidden;  
  width:360px;
  outline:none;
  background:inherit;
  resize:none;
  border:none;
  font-size:20px;
  font-family:${props=> props.curfont};
  color:${props => props.curcolor};
  text-align:${props=> props.curalign};
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
  display:flex;
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
  justify-content:flex-end;
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

const ListDiv = styled.div`
  height:56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Editor extends Component { 
  constructor(props){
    super(props);
    this.state ={
      value:'',
      fontArray:['굴림','궁서','돋움','Impact'],
      alignArray:['left','center','right'],
      colorArray:['rgb(0, 0, 0)','rgb(255, 255, 255)','rgb(244, 81, 30)','rgb(251, 192, 45)','rgb(0, 200, 83)','rgb(0, 145, 234)','rgb(0, 184, 212)','rgb(0, 105, 92)','rgb(170, 0, 255)','rgb(123, 31, 162)'],
      showCurrent:'show',
      showListCurrent:'none',
      curcolor:'black',
      curalign:'center',
      curfont:'굴림'
    }
  }
  
  textarea = React.createRef();

  handleChange = (e) =>{
    this.setState({value:e.target.value})
  }

  handleClick = (e) =>{
    this.textarea.current.focus();
    this.setState({
      showCurrent:'hidden'
    });
    
  }
  
  handleGoBack = (e) =>{
    this.setState({
      showCurrent:'show'
    });
    
  }

  handleColorClick = (colorSelected) => {
    this.setState({curcolor:colorSelected});
  }

  handleFontClick = (FontSelected) => {
    this.setState({curfont:FontSelected});
  }
  
  handleAlignClick = (AlignSelected) => {
    this.setState({curalign:AlignSelected});
  }

  handleListBoxClick = (listName) =>{
    this.setState({showListCurrent: listName});
  };
  
  render(){
    return (
        <>
          <DivBody bgcolor={this.state.showCurrent}ref={this.divBody}>
            <Div>
              
              {
              this.state.showCurrent === 'show' ? 
              <Header display={this.state.header}ref={this.Header} >
                <Span>
                  취소
                </Span>
                <DivIcon>
                  <Icon src={text}/>
                  <Icon src={writingPaper}/>
                </DivIcon>
              </Header>
              :
              <HeaderHidden display={this.state.headerHidden}>
                <Img width={24} height={28} src={goBack} onClick={this.handleGoBack}/>
                <CompleteDiv>
                  완료
                </CompleteDiv>
              </HeaderHidden>  
              }

              <Content onClick={this.handleClick} >
                <Textarea ref={this.textarea} maxRows={14} curcolor={this.state.curcolor} curfont={this.state.curfont} curalign={this.state.curalign}/>
              </Content>
              
              {
                this.state.showCurrent ==='show' ?
                <Footer display={this.state.footer} ref={this.footer}>
                  <DivFrom>
                    From.  
                    <Input onChange={this.handleChange}value={this.state.value} placeholder="보내는 이"/>
                  </DivFrom>
                  <DivBnt>
                    <Button>
                      저장
                    </Button>
                  </DivBnt>
                </Footer>  
                :
                <FooterHidden display={this.state.footerHidden} ref={this.footerHidden}>
                <ListDiv>                                               
                  {this.state.fontArray.map((font,idx)=>{
                    return (<Font showListCurrent={this.state.showListCurrent} handleFontClick={this.handleFontClick} boxName="fontBox" fontType={font} currentfont={this.state.curfont} name={font} key={idx}/>)
                  })}
                  {this.state.alignArray.map((alignType,idx)=>{
                    return (<Align showListCurrent={this.state.showListCurrent} handleAlignClick={this.handleAlignClick} boxName="alignBox" alignType={alignType} currentalign={this.state.curalign} name={alignType} key={idx}/>)
                  })}
                  {this.state.colorArray.map((colorType,idx)=>{
                    return (<Color showListCurrent={this.state.showListCurrent} handleColorClick={this.handleColorClick} boxName="colorBox" colorType={colorType} current={this.state.curcolor} key={idx} />)
                  })}
                </ListDiv>
                <SelectList>
                  <In>
                    <Img onClick={()=>(this.handleListBoxClick('fontBox'))} width={50} height={50} src={this.state.showListCurrent === "fontBox" ? font_focus: font} />
                    <Img onClick={()=>(this.handleListBoxClick('alignBox'))} width={50} height={50} src={this.state.showListCurrent === "alignBox" ? align_focus: align}/>
                    <Img onClick={()=>(this.handleListBoxClick('colorBox'))} width={50} height={50} src={this.state.showListCurrent === "colorBox" ? color_focus: color}/>
                  </In>
                </SelectList>
              </FooterHidden>
              }     
            </Div>
          </DivBody>
        </>
    );
  }
      
}

export default Editor;
