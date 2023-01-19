import {Link, useLocation} from "react-router-dom";
import "./list.scss";
import {useContext, useState} from "react";
import {ListContext} from "../../context/listContext/ListContext";
import { updateList } from "../../context/listContext/apiCalls";


export default function List() {
    const location = useLocation();
    const lists = location.lists;
    const [list, setList] = useState(lists);
    const {dispatch} = useContext(ListContext);
    
    const handleChange = (e) => {
        const value = e.target.value;
        setList({
            ...list,
            [e.target.name]: value
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        updateList(list, dispatch)
        window.location.href = '/lists'
    }

    return (
        
        <div className="anime">
            <div className="animeTitleContainer">
                <h1 className="animeTitle">Edit List</h1>
                <Link to="/newlist">
                    <button className="animeAddButton">Create</button>
                </Link>
            </div>
            <div className="animeTop">

                <div className="animeTopRight">
                    <div className="animeInfoTop">
                        <span className="animeName">
                            {
                            lists.title
                        }</span>
                    </div>
                    <div className="animeInfoBottom">
                        <div className="animeInfoItem">
                            <span className="animeInfoKey">ID:
                            </span>
                            <span className="animeInfoValue">
                                {
                                lists._id
                            }</span>
                        </div>
                        <div className="animeInfoItem">
                            <span className="animeInfoKey">Genre</span>
                            <span className="animeInfoValue">
                                {
                                lists.genre
                            }</span>
                        </div>
                        <div className="animeInfoItem">
                            <span className="animeInfoKey">Type</span>
                            <span className="animeInfoValue">
                                {
                                lists.type
                            }</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="animeBottom">
                <form className="animeForm">
                    <div className="animeFormLeft">
                        <label>List Title</label>
                        <input type="text"
                            placeholder={
                                lists.title
                            }
                            name="title"
                            onChange={handleChange}/>
                        <label>Type</label>
                        <input type="text"
                            placeholder={
                                lists.type
                            }
                            name="type"
                            onChange={handleChange}/>
                        <label>Genre</label>
                        <input type="text"
                            placeholder={
                                lists.genre
                            }
                            name="genre"
                            onChange={handleChange}/>
                    </div>
                    <div className="animeFormRight">
                        <button className="animeButton"
                            onClick={handleUpdate}>Update</button>
                    </div>
                </form>
            </div>
        </div>
        
    );
}