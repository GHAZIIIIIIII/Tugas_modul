import './App.css';
import React from  'react';
import Utama from './utama';
import Header from './Components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  render(){
    return(
      <div> 
        <Header/>
        <Utama/> 
      </div>

    )
  }
}

export default App;

