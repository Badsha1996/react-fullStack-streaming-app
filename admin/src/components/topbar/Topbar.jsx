import React from "react";
import "./topbar.scss";
import logo from "../../assets/logo.png"
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <img src={logo}  className="logo_img" />
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <img src="https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
