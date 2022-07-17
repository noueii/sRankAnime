import React, {Component} from 'react';
import './App.css';
import Heather from './Heather';
import AnimeFetcher from './AnimeFetcher'

class App extends Component {
  render(){
    return (
    <div className="App">
        <header>
        </header>
        <body>
          <Heather/>
          {/*<AnimeFetcher/>*/}
          <div className='AnimeContainers'>
            {/*<AnimeContainer/>
              /*<AnimeContainer/> 
              /*<AnimeContainer/>
              /*<AnimeContainer/>
              /*<AnimeContainer/>
              /*<AnimeContainer/>
            */}
          </div>
        </body>
        
    </div>
  );
  }
  
}

export default App;
