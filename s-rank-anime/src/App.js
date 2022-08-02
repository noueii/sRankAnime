import React, {Component} from 'react';
import Heather from './Components/Heather';
import './App.css';
import AnimeContainers from './Components/AnimeContainers';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Anime_page from './Components/Anime_page';


class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Heather/>
          <div className='content'>
            <Routes>
              <Route path="/" element={<AnimeContainers/>}/>
              <Route path="/anime/:id" element={<Anime_page/>}/>
              <Route path="*"/>
            </Routes>

            
          </div>

        </div>
      </Router>
        
    
  )}
  
}

export default App;
