import React, { Component } from "react";

import { BrowserRouter, Route, Switch} from "react-router-dom"

import Navbar from "./components/Navbar";
import Home from './components/Home';
import Fact1 from './components/Fact1';
import Fact2 from './components/Fact2';
import Fact3 from './components/Fact3';

class App extends Component{
render() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>

      <Switch>
      <Route exact path='/' component={Home}/>

      <Route exact path='/Fact1' component={Fact1}/>

      <Route exact path='/Fact2' component={Fact2}/>
      
      <Route exact path='/Fact3' component={Fact3}/>
      
      </Switch>
    </div>
    </BrowserRouter>
  );
  
}
}
export default App;
