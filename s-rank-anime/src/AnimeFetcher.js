import React, { useEffect, useState } from "react";
import axios from 'axios'

function AnimeFetcher(){
    const [animes,setAnime] = useState([])

    useEffect(() =>{
        axios.get('https://api.jikan.moe/v4/top/anime')
        .then(res => {
            console.log(res)
            setAnime(res.data.data)
            console.log(animes);
        })

        .catch(err =>{
            console.log(err)
        })
    }, [])

    return (
        <div>
            <ul>
                {animes.map(anime =>(
                    <li key={anime.id}>{anime.title}</li> 
                ))}
                
            </ul>
        </div>
    )
}

export default AnimeFetcher;