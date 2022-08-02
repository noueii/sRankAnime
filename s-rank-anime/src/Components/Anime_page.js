import {React, useEffect, useState} from 'react'
import './Anime_page.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Anime_page(){

    let navigate = useNavigate();
    let {id} = useParams();

    const [loading, setLoading] = useState(null)
    const [anime, setAnime] = useState()

    const [title,setTitle] = useState()
    const [episodes,setEpisodes] = useState()
    const [genres,setGenres] = useState([])
    const [image,setImage] = useState()
    const [rank,setRank] = useState()
    const [score,setScore] = useState()
    const [studios,setStudios] = useState([])
    const [airing,setAiring] = useState(null)
    const [video,setVideo] = useState()
    const [description,setDescription] = useState()


    useEffect(() =>{
        async function fetchData(){
            setLoading(true)
            const apiLink = "https://api.jikan.moe/v4/anime/" + id + "/full"
            axios.get(apiLink)
            .then(res =>{
                console.log(res.data)
                const anime = res.data.data
                // console.log(anime)
                setLoading(false)
                setTitle(anime.title)
                setEpisodes(anime.episodes)
                setGenres(anime.genres)
                setImage(anime.images.jpg.image_url)
                setRank(anime.rank)
                setScore(anime.score)
                setStudios(anime.studios)
                setAiring(anime.status) 
                setVideo(anime.trailer.embed_url)
                setDescription(anime.synopsis)
                console.log(title) 
            })
            .catch(err =>{
                console.log(err)
            })
        }
        fetchData()
        console.log(anime);
    },[]);

    function isAiring(){
        if(airing === true) return "Airing: Yes"
        return "Airing: No"
    }

        return(
            <form>
                
                <div className='container'>
                    <div className='anime-page-image'><img  src={image}/></div>
                    <div className='other-details'>
                        <p>{isAiring()}</p>
                        <p>Genres: {genres.map((genre)=>{
                            return "" + genre.name + ", "
                        })}
                        </p>
                        <p>Episodes: {episodes}</p>
                        <p>Studios: {studios.map((studio)=>{
                            return "" + studio.name + ","
                        })}</p>
                    </div>
                    <div className='anime-page-popularity'>
                        <h1>{title}</h1>
                        <ul>
                            <li>User Score: {score}</li>
                            <li>Popularity Ranking: {rank}</li>
                        </ul>
                    </div>
                    <div className='anime-page-description'><p>{description}</p></div>
                    <div className='video'>
                    <iframe 
                    src={video}
                    title="YouTube video player" 
                    frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </form>
        )
    

}

export default Anime_page