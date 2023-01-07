import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Badsha-AdminPanel</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
