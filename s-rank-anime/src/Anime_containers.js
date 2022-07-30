import React, {Component } from 'react'
import './Anime_containers.css';
import Anime_container from './Anime_container';
class Anime_containers extends Component{

    render(){
        return(
            <form>
                <div className='container'>
                    <div className='no1'> <Anime_container/> </div>
                    <div className='no2'> <Anime_container/> </div>
                    <div className='no3'> <Anime_container/> </div>
                    <div className='no4'> <Anime_container/> </div>
                    <div className='no5'> <Anime_container/> </div>
                    <div className='no6'> <Anime_container/> </div>
                    

                </div>
            </form>
        )
    }

}

export default Anime_containers