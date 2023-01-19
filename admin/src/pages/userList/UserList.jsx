import "./userList.scss";
import {DataGrid} from "@material-ui/data-grid";
import {DeleteOutline} from "@material-ui/icons";

import {Link} from "react-router-dom";

import {useContext} from "react";
import {UserContext} from "../../context/userContext/UserContext";
import {useEffect} from "react";
import {deleteUser, getUser} from "../../context/userContext/apiCalls";


export default function UserList() {
    const {users, dispatch} = useContext(UserContext)
    
    useEffect(() => {
      getUser(dispatch)
    }, [dispatch])

    const handleDelete = (id,e) => {
        deleteUser(id,dispatch)
        window.location.reload(false);
    }
    const columns = [
        {
            field: "_id",
            headerName: "ID",
            width: 250
        },
        {
            field: "username",
            headerName: "User",
            width: 250,
            renderCell: (params) => {
              
                return (
                    <div className="userListUser">
                        <img className="userListImg"
                            src={
                                params.row.profilePic || "https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-2.jpg"
                            }
                            alt="avatar"/> {
                        params.row.username
                    } </div>
                );
            }
        },
        {
            field: "email",
            headerName: "Email",
            width: 200
        },
        {
            field: "isAdmin",
            headerName: "Admin",
            width: 120
        }, {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={
                        {pathname:"/user/" + params.row._id,user:params.row}
                    }>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete"
                            onClick={
                                () => handleDelete(params.row._id)
                            }/>
                    </>
                );
            }
        },
    ];

    return (
        <div className="userList">
            <DataGrid rows={users}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
                getRowId={
                    r => r._id
                }/>
        </div>
    );
}
