import React, {useEffect, useState } from 'react'
import './AnimeContainers.css';
import AnimeContainer from './AnimeContainer';
import AnimeFetcher from './AnimeFetcher';
import useRequestAPI from './useRequestAPI';
import useDebounce from './useDebounce';
import axios from 'axios';

function AnimeContainers(){
    const [animes, setAnimes] = useState([])
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState()
    const [selects, setSelect] = useState()
    const [apiCall, setApiCall] = useState()
    

    useEffect(() =>{
        async function fetchData(url){
            setLoading(true)
            setAnimes([]);

                axios.get(url)
                .then(res =>{
                    console.log(res.data)
                    setAnimes(res.data.data)
                    console.log(animes)
                })
                .catch(err =>{
                    console.log(err)
                })
            setLoading(false)
            
        }
        if(selects === undefined){
            fetchData("https://api.jikan.moe/v4/top/anime")
        }
        else{
            switch(selects){
                case "Action" : fetchData("https://api.jikan.moe/v4/anime?genres=1&order_by=scored_by&sort=desc")
                case "Adventure" : fetchData("https://api.jikan.moe/v4/anime?genres=2&order_by=scored_by&sort=desc")
                case "Comedy" : fetchData("https://api.jikan.moe/v4/anime?genres=4&order_by=scored_by&sort=desc")
                case "Drama" : fetchData("https://api.jikan.moe/v4/anime?genres=8&order_by=scored_by&sort=desc")
                case "Fantasy" : fetchData("https://api.jikan.moe/v4/anime?genres=10&order_by=scored_by&sort=desc")
                case "Romance" : fetchData("https://api.jikan.moe/v4/anime?genres=22&order_by=scored_by&sort=desc")
                case "Slice of Life" : fetchData("https://api.jikan.moe/v4/anime?genres=36&order_by=scored_by&sort=desc")
            }
        }
        console.log(animes);
    },[selects]);
     
        return(
                <div className='containerBody'>
                   <select value={selects} onChange={e=>setSelect(e.target.value)}>
                        <option selected disabled hidden>Pick your Genre</option>
                        <option>Action</option>
                        <option>Adventure</option>
                        <option>Comedy</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Romance</option>
                        <option>Slice of Life</option>
                    </select> 
                
                    <div className='containers'>
                    
                    {animes.map((anime)=>{
                        // console.log(anime)
                        // console.log(anime.genres)
                        // console.log(anime.images)
                        // console.log(anime.score)
                        // console.log(anime.rank)
                        // console.log(anime.synopsis)
                        // console.log(anime.trailer)
                        // console.log(anime.url)
                        return <AnimeContainer 
                        title={anime.title}
                        genres={anime.genres}
                        image={anime.images}
                        score={anime.score}
                        rank={anime.rank} 
                        description={anime.synopsis}
                        youtubeLink={anime.trailer}
                        malLink={anime.url}
                        id = {anime.mal_id}/> 
                    })} 
                </div>
                </div>
        )
}

export default AnimeContainers