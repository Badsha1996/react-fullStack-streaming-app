import {useContext, useState} from "react";
import "./newList.scss";
import {  getMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import { useEffect } from "react";
import { createList } from "../../context/listContext/apiCalls";

export default function NewList() {
    const [list, setList] = useState(null);
    const {dispatch} = useContext(ListContext)
    const {movies, dispatch:dispatchMovie} = useContext(MovieContext)
    
useEffect(()=>{
    
getMovies(dispatchMovie)
return ()=> {
    
}
},[dispatchMovie])
    const handleChange = (e) => {
        const value = e.target.value;
        setList({
            ...list,
            [e.target.name]: value
        })
    }
    const handleSelect = (e)=>{
        let value = Array.from(e.target.selectedOptions, (option)=>option.value)
        setList({...list, [e.target.name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        createList(list,dispatch)
        window.location.href = '/lists'
    }
    
    return (
        <div className="newAnime">
            <h1 className="addAnimeTitle">Create New List</h1>
            <form className="addAnimeForm">
                <div className="formLeft">

                
                <div className="addAnimeItem">
                    <label>Title</label>
                    <input type="text" placeholder="title" name="title"
                        onChange={handleChange}/>
                </div>
                <div className="addAnimeItem">
                    <label>Genre</label>
                    <input type="text" placeholder="genre" name="genre"
                        onChange={handleChange}/>
                </div>
                <div className="addAnimeItem">
                    <label>Type</label>
                    <select name="type" onChange={handleChange}>
                        <option >Type</option>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                    </select>
                </div>
                </div>
                <div className="formRight">
                <div className="addAnimeItem">
                    <label>Content</label>
                    <select multiple name="content" onChange={handleSelect} style={{height:"180px"}}>
                        {movies.map((movie)=>{
                            return (<option key={movie._id} value={movie._id}>{movie.title}</option>)
                        })}  
                    </select>
                </div>
                </div>
                <button className="addAnimeButton" onClick={handleSubmit}>Create</button>
                </form>
        </div>
    );
}
