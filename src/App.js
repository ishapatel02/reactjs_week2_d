import React, { Component } from 'react';
//importing Menu Component from Components folder
import Main from './components/MainComponent';
import './App.css';

//react-router for navigation links.
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

 

render() {
  return (
    <BrowserRouter>
      <div className= "App">
         {/*to render the main on the screen*/}
         <Main />
      </div>
   </BrowserRouter>
  );
}
}

export default App;
