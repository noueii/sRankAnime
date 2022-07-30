import React, {Component } from 'react'
import './Anime_container.css';
class Anime_container extends Component{

    constructor(props){
        super(props)
            this.state={
                searchbar: ""

            }
    }

    handleSearchChange =(event)=>{
        this.setState({
            searchbar: event.target.value},
            ()=>{console.log(this.state.searchbar)})
        
    }

    

    render(){
        return(
            <form>
                <div className='container'>
                    <div className='title'>Title</div>
                    <div className='genre'>Genre</div>
                    <div className='image'><img  src="s-rank-logo.jpg"/></div>
                    <div className='description'><h3>Popularity details</h3></div>
                    <div className='description'><h3>Description of anime</h3></div>
                    <div className='links'>Links</div>
                    

                </div>
            </form>
        )
    }

}

export default Anime_container