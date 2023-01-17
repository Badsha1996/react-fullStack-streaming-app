import "./animeList.scss";
import {DataGrid} from "@material-ui/data-grid";
import {DeleteOutline} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {MovieContext} from "../../context/movieContext/MovieContext";
import {useEffect} from "react";
import {deleteMovies, getMovies} from "../../context/movieContext/apiCalls";

export default function AnimeList() {
    const {movies, dispatch} = useContext(MovieContext)
    
    useEffect(() => {
        getMovies(dispatch)
    }, [dispatch])

    const handleDelete = (id) => {
        deleteMovies(id, dispatch)
    };
    const columns = [
        {
            field: "_id",
            headerName: "ID",
            width: 90
        },
        {
            field: "movie",
            headerName: "Anime",
            width: 200,
            renderCell: (params) => {
                return (<div className="animeListItem">
                    <img className="animeListImg"
                        src={
                            params.row.img
                        }
                        alt=""/> {
                    params.row.name
                } </div>);
            }
        },
        {
            field: "genre",
            headerName: "Genre",
            width: 120
        },
        {
            field: "year",
            headerName: "Year",
            width: 120
        }, {
            field: "Agelimit",
            headerName: "Rated",
            width: 120
        }, {
            field: "isSeries",
            headerName: "Series",
            width: 120
        }, {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (<>
                    <Link to={
                        {pathname:"/product/" + params.row._id,movie:params.row}
                    }>
                        <button className="animeListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="animeListDelete"
                        onClick={
                            () => handleDelete(params.row._id)
                        }/>
                </>);
            }
        },
    ];

    return (<div className="animeList">
        <DataGrid rows={movies}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            getRowId={
                r => r._id
            }/>
    </div>);
}
