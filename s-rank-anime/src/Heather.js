import React, {Component } from 'react'
import './Heather.css';
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
                <div>
                    <img className='logo' src="s-rank-logo.jpg"/>
                    <h1 className='title'> Rank Anime </h1>
                    <input className='search' type="text" value={this.state.searchbar} onChange={this.handleSearchChange}></input>
                    <button >Search</button>
                    <br></br>
                    <br></br>
                    <select className='select'  value={this.state.genre} onChange={this.handleGenreChange}>
                        <option value="action">Action</option>
                        <option value="drama">Drama</option>
                        <option value="horror">Horror</option>
                    </select>

                </div>
            </form>
        )
    }

}

export default Heather