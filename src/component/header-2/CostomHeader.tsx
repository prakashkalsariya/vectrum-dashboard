import React from "react";
import "./CostomHeader.scss";
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

function CostomHeader(props:any) {
  // console.log(props.data("hii"))

  const [sideBar, setSideBar] = useState(true);
  const OnClickSideBarHandler = () => {
    setSideBar(!sideBar);
    props.data(sideBar)
  };

  return (
    <div className="header-main-container">
       
      <div   className={`header ${ sideBar? "" : "display-non"}`}>
        <div className="logo-left-side">
          <img src="clarityicon.svg" alt="" onClick={OnClickSideBarHandler} />
          <h4>Dashboard</h4>
        </div>
        <div className="other-link-icon-right-side">
          <img src="profileweb.svg" alt="" className="profile-icon-img" />
          <img src="searchiconweb.svg" alt="" className="search-icon-img" />
        </div>
      </div>
      <div
        className={`  ${sideBar ? "header-sidebar-tranform" : ""}  ${sideBar ? "header-sidebar-in":"header-sidebar-out"}`}
      >
        <div className="header-sidebar-inner-contain-container">
          <div className="back-icon-container">
            <img
              src="backbutton.svg"
              alt=""
              className="back-icon-img"
              onClick={OnClickSideBarHandler}
            />
          </div>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`fade-slide  ${sideBar ? "display-none" : ""}`}   onClick={OnClickSideBarHandler}></div>
    </div>
  );
}

export default CostomHeader;
