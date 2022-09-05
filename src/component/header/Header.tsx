import React from "react";
import "./Header.scss";
function Header() {
  return (
    <div>
      <nav className="navbar bg-light fixed-top">
        <div className="container-fluid">
          <div className="navbar-toggle">
            <button>
            <img
              src="clarityicon.svg"
              alt=""
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
            />
            </button>
            <h4>Dashboard</h4>
          </div>
          <div className="right-side-link d-flex ">
            <img src="profileweb.svg" alt="" className="profile-icon" />
            <img src="searchiconweb.svg" alt="" className="search-icon" />
          </div>
          <div
            className="offcanvas offcanvas-start"
            tab-index="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              
              <img src="backbutton.svg"      data-bs-dismiss="offcanvas" alt="" />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
