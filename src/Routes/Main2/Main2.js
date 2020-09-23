import React, {Component} from 'react'
import styled from "styled-components";
import Paper from "../../Components/Paper"
import { DB_API } from "../../api";

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
    results: null
  }

  async componentDidMount(){
    try{
      console.log('1');
        if (typeof(this.props.location.state) !== "undefined" && this.props.location.state.id !== "" && typeof(this.props.location.state) !== "undefined" && this.props.location.state.pw !== ""  ){
          console.log('2');
          if(this.props.location.state.pw.length > 4){
            this.props.location.state.pw = this.props.location.state.pw.substring(0,4);
          }
          console.log('3');
          await DB_API.peopleName(this.props.location.state.id,this.props.location.state.pw).then((e)=>{
            console.log(e.data);
            const results = e.data.results;
            const id = this.props.location.state.id;
            const pw = this.props.location.state.pw;
            this.setState({results,id,pw});
          });
        }
      // id,pw가 유효하지 않으므로 
        else{
          console.log('5');
          this.props.history.push('/create');
        }
      }catch(err){
        console.log('6');
        console.log('err content: ', err);
    }
  }

 
  render(){
    return (
        <>
          <DivBody>
              <Paper id={this.state.id} pw={this.state.pw} results={this.state.results}/>
          </DivBody>
        </>
    );
  }
}

export default Main2;
