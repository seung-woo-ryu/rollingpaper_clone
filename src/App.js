import React, {Component} from 'react'
import GlobalStyles from "./Components/GlobalStyles";
import Main from "./Routes/Main";
import Celebrate from "./Routes/Celebrate";
import Create from "./Routes/Create";
import Main2 from "./Routes/Main2";
import Editor from "./Routes/Editor";
import a from './a';
import { Redirect,Switch, Route,BrowserRouter } from "react-router-dom";

class App extends Component { 
  render(){
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/celebrate' exact component={Celebrate}/>
            <Route path='/create' exact component={Create}/>
            <Route path='/main2' exact component={Main2}/>
            <Route path='/editor' exact component={Editor}/>
            <Route path='/a' exact component={a}/>
            <Redirect path='*' to='/' />
          </Switch>
        </BrowserRouter>
        <GlobalStyles />  
      </>
    );
  }
}

export default App;
