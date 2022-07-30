import React, {Component} from 'react';
import Heather from './Heather';
import './App.css';
import AnimeFetcher from './AnimeFetcher'
import Anime_page from './Anime_page';
import Anime_container from './Anime_container';
import Anime_containers from './Anime_containers';

class App extends Component {
  render(){
    return (
    <div className="App">
        <header>
        </header>
        <body>
          <Heather/>
          {/* <Anime_page/> */}
          <Anime_containers/>
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
