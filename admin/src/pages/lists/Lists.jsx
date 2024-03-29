import "./lists.scss";
import {DataGrid} from "@material-ui/data-grid";
import {DeleteOutline} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {ListContext} from "../../context/listContext/ListContext";
import {useEffect} from "react";
import { deleteList, getLists } from "../../context/listContext/apiCalls";

export default function Lists() {
    const {lists, dispatch} = useContext(ListContext)
    
    
    useEffect(() => {

        getLists(dispatch)
        return ()=>{
            
        }
    }, [dispatch])

    const handleDelete = (id) => {
        deleteList(id,dispatch)
        window.location.reload(false);
    };
    const columns = [
        {
            field: "_id",
            headerName: "ID",
            width: 250
        },
        {
            field: "title",
            headerName: "Title",
            width: 250
        },
        {
            field: "genre",
            headerName: "Genre",
            width: 150
        },
        {
            field: "type",
            headerName: "Type",
            width: 150
        },{
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (<>
                    <Link to={
                        {pathname:"/list/" + params.row._id,lists:params.row}
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
        <DataGrid rows={lists}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            getRowId={
                r => r._id
            }/>
    </div>);
}
