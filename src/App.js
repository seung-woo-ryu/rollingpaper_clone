import React, {Component} from 'react'
import GlobalStyles from "./Components/GlobalStyles";
import Main from "./Routes/Main";
import Celebrate from "./Routes/Celebrate";
import Create from "./Routes/Create";
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
          </Switch>
        </BrowserRouter>
        <GlobalStyles />  
      </>
    );
  }
}

export default App;
