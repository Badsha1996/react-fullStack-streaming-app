import React from "react";
import "./topbar.scss";
import logo from "../../assets/logo.png"
import {useContext} from "react";
import {AuthContext} from "../../context/authContext/AuthContext";

export default function Topbar() {
    const {user} = useContext(AuthContext)

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img src={logo}
                        alt="logo"
                        className="logo_img"/>
                    <span className="logo">Admin</span>
                </div>
                <div className="topRight">
                    <img src={
                            user.profilePic
                        }
                        alt=""
                        className="topAvatar"/>
                </div>
            </div>
        </div>
    );
}
