import React, {Component} from 'react';
import './App.css';
import Heather from './Heather';
import AnimeFetcher from './AnimeFetcher'

class App extends Component {
  render(){
    return (
    <div className="App">
        <header>
          <Heather/>
          <AnimeFetcher/>
        </header>
        
    </div>
  );
  }
  
}

export default App;
