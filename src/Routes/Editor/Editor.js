import React, {Component} from 'react'
import styled from "styled-components";
import TextareaAutosize from 'react-autosize-textarea';
import { Link } from "react-router-dom";

import Font from '../../Components/Font';
import Align from '../../Components/Align';
import Color from '../../Components/Color';
import PaperColor from '../../Components/PaperColor';
import Photo from '../../Components/Photo';
import Img from '../../Components/Img';


import writingPaper from './writingPaper.png';
import text from './text.png';
import goBack from './goBack.png';
import align from './align_normal.png';
import align_focus from './align_focus.png';
import color_focus from './color_focus.png';
import color from './color_normal.png';
import font_focus from './font_focus.png';
import font from './font_normal.png';
import paperColor from './paperColor.png';
import paperColor_focus from './paperColor_focus.png';
import camera from './camera.png';
import camera_focus from './camera_focus.png';

import { DB_API } from "../../api";


const DivBody = styled.div`
    height:100vh;
    align-items:space-around;
    display:flex;
    justify-content:center;
    background-color:${props => (props.bgcolor ==='hidden' || props.bgcolor ==='paperHidden')? 'rgb(102, 102, 102)' : 'white'};
`;

const Div = styled.div`
    width: 450px;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    width:80%;
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

const Content = styled.div`
    position:relative;  
    width:356px;
    height:340px;
    border-radius: 10px;
    display:flex;
    background-color:${props =>props.curpapercolor};
    justify-content:center;
    align-items:center;
    margin-bottom:15px;
`;

const Textarea = styled(TextareaAutosize)`
  position:absoulte;
  top:0;
  right:0;
  overflow:hidden;
  zIndex:10;  
  width:360px;
  outline:none;
  background-color:transparent;
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
  &:hover{
    cursor:pointer;
  }
`;

const Footer = styled.div`
  display:flex;
  height:40vh;
  width:90%;
  flex-direction:column;
  justify-content:space-around;
`;
const DivFrom = styled.div`
  margin-top:10px;
  width:100 %;
  font-size 30px;
  text-align:right;
  font-weight:lighter;
`;

const DivBnt = styled.div`
  display:flex;
  width:100%;
  height:25vh;
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

const Button = styled(Link)`
  text-decoration:none;
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
  align-items:center;
  margin-top:40px;
  margin-bottom:30px;
  background-color:inherit;
`;

const CompleteDiv = styled.div`

  font-size:22px;
  color:white;
  &:hover{
    cursor:pointer;
  }
`;

const FooterHidden = styled.div`
  height:40vh;  
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

const PaperColorDiv = styled.div`
  display:grid;
  grid-template-columns: repeat(2,1fr);
  grid-auto-rows: 150px;
  column-gap: 40px;
  row-gap: 15px;
`;

class Editor extends Component { 
  constructor(props){
    super(props);
    
    this.state ={
      file:'',
      uploadImg:'',
      width:104,
      height:104,
      areaValue:'',
      value:'',
      paperColorArray:['rgb(244, 244, 244)','rgb(255, 255, 255)','rgb(219, 230, 239)','rgb(242, 229, 229)','rgb(253, 255, 181)','rgb(230, 228, 217)','rgb(180, 212, 241)','rgb(241, 192, 181)','rgb(174, 155, 248)','rgb(243, 201, 130)','rgb(246, 109, 211)','rgb(116, 240, 163)','rgb(111, 166, 239)','rgb(142, 79, 235)','rgb(35, 35, 35)','','','','','','',''],
      fontArray:['굴림','궁서','돋움','Impact'],
      alignArray:['left','center','right'],
      colorArray:['rgb(0, 0, 0)','rgb(255, 255, 255)','rgb(244, 81, 30)','rgb(251, 192, 45)','rgb(0, 200, 83)','rgb(0, 145, 234)','rgb(0, 184, 212)','rgb(0, 105, 92)','rgb(170, 0, 255)','rgb(123, 31, 162)'],
      show:'show',
      showListCurrent:'none',
      showpapercolorimg:'paperColor',
      curcolor:'black',
      curalign:'center',
      curfont:'굴림',
      curpapercolor:'rgb(244, 244, 244)',
    }
    

    if (!(typeof(this.props.location.state) !== "undefined" && this.props.location.state.id !== "" && typeof(this.props.location.state) !== "undefined" && this.props.location.state.pw !== ""))
    {
      this.props.history.push('/create');
    }

  }

  textarea = React.createRef();


  handleChange = (e) =>{
    this.setState({value:e.target.value});
  }

  handleAreaChange =(e) =>{
    this.setState({areaValue:e.target.value});
  }

  handleClick = (e) =>{
    this.textarea.current.focus();
    this.setState({
      show:'hidden'
    });
  }
  
  handlePaperColorClick = () =>{
    this.setState({show:'paperHidden'});
  }

  handleGoBack = () =>{
    this.setState({
      show:'show'
    });
  }

  handleGoBackClick = () =>{
    this.setState({show:'sticker'});
  }

  handleUploadImg = (e) =>{
    // 미리보기
    let reader = new FileReader();
    // 전송할 때 쓰는 파일 변수
    let file = e.target.files[0];
    reader.onloadend = () =>{
      this.setState({file:file, previewURL: reader.result.toString()});  
    }
    if (e.target.fils[0]){
      reader.readAsDataURL(file);
    }
  }
  
  handlePaperShape = (shapeSelected) =>{
    this.setState({showpapercolorimg:shapeSelected})
  }

  handlePaperColorDivClick = (paperColorSelected) =>{
    this.setState({curpapercolor:paperColorSelected,uploadImg:'',width:'',height:''});
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
  
  handleSubmit = () =>{
    DB_API.saveCardInfo(this.props.location.state.id,this.props.location.state.pw,this.state.areaValue,this.state.value,this.state.curfont,this.state.curalign,this.state.curcolor,this.state.curpapercolor,this.state.file);
  }

  handleImgUpload = (event) => {
    const files = event.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({uploadImg:reader.result.toString(),width:'inherit',height:'inherit'});
    }

    if(files){
      reader.readAsDataURL(files);
    }
  };

  render(){
    return (
        <>
          <DivBody bgcolor={this.state.show}>
            <Div>
                {
                  this.state.show ==='paperHidden' &&
                  <>
                    <HeaderHidden>
                      <Img width={24} height={28} src={goBack} onClick={this.handleGoBack}/>
                      <div>
                        <Img onPaperClick={this.handlePaperShape} imgName='paperColor' width={48} height={48} src={this.state.showpapercolorimg === 'paperColor' ? paperColor_focus : paperColor}/>
                        <Img onPaperClick={this.handlePaperShape} imgName='camera' width={48} height={48} src={this.state.showpapercolorimg === 'camera' ? camera_focus : camera}/>
                      </div>
                      <CompleteDiv onClick={this.handleGoBack}>
                        완료
                      </CompleteDiv>
                    </HeaderHidden>

                    {this.state.showpapercolorimg ==='paperColor' &&
                    <PaperColorDiv>
                      {this.state.paperColorArray.map((paperColor,idx) =>{
                        return <PaperColor handlePaperColorDivClick={this.handlePaperColorDivClick} paperColorType={paperColor} curpapercolor={this.state.curpapercolor} key={idx}> </PaperColor>
                      })}
                    </PaperColorDiv>
                    }

                    {this.state.showpapercolorimg ==='camera' &&
                    <>
                      <div style={{width:'380px', height:'380px'}}>
                        <Photo width={this.state.width} height={this.state.height} uploadImg={this.state.uploadImg} handleUploadImg={this.handleImgUpload}/>
                      </div>
                    </>
                    }
                  </>
                }

                {
                 this.state.show ==='show' && 
                  <Header>
                    <Span onClick={()=>this.props.history.goBack()}>
                      취소
                    </Span>
                    <DivIcon>
                      <Img width={38} height={50} onClick={this.handleClick} src={text}/>
                      <Img width={38} height={50} onClick={this.handlePaperColorClick} src={writingPaper}/>
                    </DivIcon>
                  </Header>
                }
                {
                  this.state.show === 'hidden' &&
                  <HeaderHidden display={this.state.headerHidden}>
                    <Img width={24} height={28} src={goBack} onClick={this.handleGoBack}/>
                    <CompleteDiv onClick={this.handleGoBack}>
                      완료
                    </CompleteDiv>
                  </HeaderHidden>  
                }

                {
                  (this.state.show ==='hidden' || this.state.show === 'show') &&
                  <Content curpapercolor={this.state.curpapercolor} onClick={this.handleClick} >
                    {this.state.uploadImg && 
                      <img alt="not loaded" style={{position:'absolute',right:0,top:0,zIndex:1,'border-radius':'inherit',width:'inherit',height:'inherit'}} src={this.state.uploadImg}/>
                    }
                    <Textarea onChange={this.handleAreaChange} value={this.state.areaValue} ref={this.textarea} maxRows={14} curcolor={this.state.curcolor} curfont={this.state.curfont} curalign={this.state.curalign}/>
                  </Content>
                }

                {this.state.show  ==='show' &&
                  <Footer>
                    <DivFrom>
                      From.  
                      <Input onChange={this.handleChange} value={this.state.value} placeholder="보내는 이"/>
                    </DivFrom>
                    <DivBnt>

                      <Button to={{pathname:'/main2',state:{id: this.props.location.state.id,pw:this.props.location.state.pw, re:true}}}onClick={this.handleSubmit}>
                        저장
                      </Button>
                    </DivBnt>
                  </Footer>  
                }

                {
                  this.state.show === 'hidden' &&
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
