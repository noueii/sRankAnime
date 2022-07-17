import React, {Component } from 'react'
import './Anime_page.css';
class Anime_page extends Component{

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
                    <div className='searchbar'></div>
                    <div className='image'><img  src="s-rank-logo.jpg"/></div>
                    <div className='description'><h2>Popularity details</h2></div>
                    <div className='description'><h3>Description of anime</h3></div>
                    

                </div>
            </form>
        )
    }

}

export default Anime_page