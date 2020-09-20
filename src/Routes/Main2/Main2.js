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

  async componentWillMount(){
  
    if (typeof(this.props.location.state) !== "undefined" && this.props.location.state.id !== "" && typeof(this.props.location.state) !== "undefined" && this.props.location.state.pw !== ""  )
    {
      if(this.props.location.state.pw.length > 4){
        this.props.location.state.pw = this.props.location.state.pw.substring(0,4);
      }
        DB_API.peopleName(this.props.location.state.id,this.props.location.state.pw).then((e)=>{
        const results = e.data.results;
        const id = this.props.location.state.id;
        this.setState({results,id});
        });

    }
    // id,pw가 유효하지 않으므로 
    else{
      this.props.history.push('/create');
    }
  }

  render(){
    return (
        <>
          <DivBody>
              <Paper name={this.state.id} results={this.state.results}/>
          </DivBody>
        </>
    );
  }
}

export default Main2;
