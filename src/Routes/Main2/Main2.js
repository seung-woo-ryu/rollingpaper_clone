import React, {Component} from 'react'
import styled from "styled-components";
import Paper from "../../Components/Paper"
import { DB_API } from "../../api";
import Sticker from '../../Components/Sticker';

const DivBody = styled.div`
    height:100vh;
    align-items:center;
    display:flex;
    justify-content:center;
    background-color:#F2F2F2;
`;

class Main2 extends Component { 

  state = {
    id: null,
    pw: null,
    results: null,
    show: 'paper',
    emoji: false,
    emojiURL: ''
  }

  async componentDidMount(){
    try{
        if (typeof(this.props.location.state) !== "undefined" && this.props.location.state.id !== "" && typeof(this.props.location.state) !== "undefined" && this.props.location.state.pw !== ""  ){
          if(this.props.location.state.pw.length > 4){
            this.props.location.state.pw = this.props.location.state.pw.substring(0,4);
          }
          await DB_API.peopleName(this.props.location.state.id,this.props.location.state.pw).then((e)=>{
            const results = e.data.results;
            const id = this.props.location.state.id;
            const pw = this.props.location.state.pw;
            this.setState({results,id,pw});
          });
        }
      // id,pw가 유효하지 않으므로 
        else{
          this.props.history.push('/create');
        }
      }catch(err){
        console.log('err content: ', err);
    }
  }

  handleGoback = () =>{
    this.setState({show:'paper'});
  }

  handleClick = () => {
    this.setState({show:'sticker'});
  }
  
  handleImgClick = (URL) =>{
    this.setState({emoji:true, emojiURL: URL,show:'paper'});
  }

  render(){
    return (
        <>
          <DivBody>
              {
                this.state.show === 'paper' 
                ? <Paper emoji={this.state.emoji} handleGoback={this.handleGoback}handleClick={this.handleClick} id={this.state.id} pw={this.state.pw} results={this.state.results}/>
                : <Sticker handleGoback={this.handleGoback} handleImgClick={this.handleImgClick}/>
              }
          </DivBody>
        </>
    );
  }
}

export default Main2;
