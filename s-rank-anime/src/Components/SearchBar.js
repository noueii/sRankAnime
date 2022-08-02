import React, {useEffect, useState} from "react";
import "./SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';
import axios, { Axios } from "axios";
import useRequestAPI from "./useRequestAPI";
import useDebounce from "./useDebounce";
import { Link } from "react-router-dom";

function SearchBar({placeholder, data}){
    const [notices, setNotices] = useState([]);
    const [search, setSearch] = useState(null);
    const [loading, setLoading] = useState();

    const deboundedSearch = useDebounce(search, 2000);
    
    useEffect(() =>{
        async function fetchData(){
            setLoading(true);
            setNotices([]);
            const data = await axios.get('https://api.jikan.moe/v4/anime?q='+deboundedSearch+'&limit=5&order_by=scored_by&sort=desc')
            .then((res) => res.data);
            setNotices(data.data)
            setLoading(false);
        }
        if(deboundedSearch) fetchData();
        
    },[deboundedSearch]);


    return(
        <div className="search">
            <div className="searchInputs">
                <input 
                    type="text" 
                    placeholder={"Search here!"}
                    onChange={(e) => setSearch(e.target.value)}/>
                
            </div>
            <div className="dataResult">
                {loading && <p>Loading. . .</p>}
                {search != "" && notices.map((notice) =>{
                    console.log(notice)
                    return <Link className="dataItem" to={"/anime/" + notice.mal_id} target="_blank">{notice.title}</Link>
                })}
            </div>
            
            
        </div>
    )
}

export default SearchBar