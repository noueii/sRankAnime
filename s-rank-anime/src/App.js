import React, {Component} from 'react';
import Heather from './Heather';
import './App.css';
import AnimeFetcher from './AnimeFetcher'
import Anime_page from './Anime_page';

class App extends Component {
  render(){
    return (
    <div className="App">
        <header>
        </header>
        <body>
          {/* <Heather/> */}
          <Anime_page/>
          
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
