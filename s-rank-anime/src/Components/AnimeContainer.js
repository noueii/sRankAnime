import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './AnimeContainer.css';
function AnimeContainer(props){

    const [title, setTitle] = useState()
    const [genres, setGenres] = useState([])
    const [image, setImage] = useState()
    const [score, setScore] = useState()
    const [rank, setRank] = useState()
    const [description, setDescription] = useState()
    const [youtubeLink, setYoutubeLink] = useState()    
    const [malLink, setMalLink] = useState()  
    const [id, setId] = useState()

    useEffect(()=>{
        console.log(props)
        setTitle(props.title)
        setGenres(props.genres)
        setImage(props.image.jpg.image_url)
        setScore(props.score)
        setRank(props.rank)
        setDescription(props.description)
        setYoutubeLink(props.youtubeLink.embed_url)
        setMalLink(props.malLink)
        setId(props.id)
    },[])

        return (
            
                <div className='animeContainer'>
                    <div className='title'><Link to={"/anime/" + id}>{title}</Link></div>
                    <div className='genre'><ul>{genres.map((genre)=>{
                        return(<li>{genre.name}</li>)
                    })}
                    </ul>
                    </div>
                    <div className='image'><img src={image}/></div>
                    <div className='popularity'>
                        <ul>
                            <li>Rank:{rank}</li>
                            <li>Score:{score}</li>
                        </ul>
                        
                    </div>
                    <div className='description'>
                        <p>{description}</p>
                    </div>
                    <div className='links'>
                        <a href={youtubeLink}>Youtube</a>
                        <a href={malLink}>MAL</a>
                    </div>
                </div>
            
        )
        
    }



export default AnimeContainer