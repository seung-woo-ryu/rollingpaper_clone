import React, {Component} from 'react'
import GlobalStyles from "./Components/GlobalStyles";
import Main from "./Routes/Main";
import Celebrate from "./Routes/Celebrate";
import Create from "./Routes/Create";
import Main2 from "./Routes/Main2";
import Editor from "./Routes/Editor";
import { Switch, Link,Route,BrowserRouter } from "react-router-dom";

class App extends Component { 
  render(){
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/celebrate'  component={Celebrate}/>
            <Route path='/create' exact component={Create}/>
            <Route path='/Main2' component={Main2}/>
            <Route path='/Editor' component={Editor}/>
          </Switch>
        </BrowserRouter>
        <GlobalStyles />  
      </>
    );
  }
}

export default App;
