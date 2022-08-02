import React, {Component } from 'react'
import './Heather.css';
import SearchBar from './SearchBar';
class Heather extends Component{

    constructor(props){
        super(props)
            this.state={
                searchbar: "",
                genre: ""

            }
    }

    handleSearchChange =(event)=>{
        this.setState({
            searchbar: event.target.value},
            ()=>{console.log(this.state.searchbar)})
        
    }

     handleGenreChange =(event)=>{
        this.setState({
            genre: event.target.value},
            ()=>{console.log(this.state.genre)})
    }
    

    render(){
        return(
            <form>
                <div className='header-items'>
                    <img className='header-logo' src="s-rank-logo.jpg"/>
                    <h1 > Rank Anime </h1>
                    <SearchBar/>
                </div>
            </form>
        )
    }

}

export default Heather