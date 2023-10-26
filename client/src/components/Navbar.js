import React from "react"
import { useLocation } from "react-router-dom";
import logo from "./../assets/eCellLight.png"

const NavBar = () => {

    const location = useLocation();

    // fucntino to control toggle sidebar
    const toggleSideBar = () => {
      if(document.getElementById("side").classList.contains("d-none")) {
        document.getElementById("side").classList.remove("d-none")
        document.getElementById("side").classList.add("d-flex")
      }
      else {
        document.getElementById("side").classList.remove("d-flex")
        document.getElementById("side").classList.add("d-none")
      }
    }

    return (
        <div className="w-full sticky-top" style={{ zIndex: 1000 }}>
            {/* navbar component */}
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#050505" }}>
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" onClick={toggleSideBar}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <a className="navbar-brand" href="/">
                      <img src={logo} height={40} alt="MIST Logo"></img>
                  </a>
                  <div className="flex-grow-1"></div>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${location.pathname === "/resources" ? "active" : ""}`} aria-current="page" href="/resources">Resources</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${location.pathname === "/team" ? "active" : ""}`} aria-current="page" href="/team">Team</a>
                    </li>
                    {/* <li className="nav-item">
                      <a className={`nav-link ${location.pathname === "/alumni" ? "active" : ""}`} aria-current="page" href="/alumni">Alumni</a>
                    </li> */}
                    {/* <li className="nav-item">
                      <a className={`nav-link ${location.pathname === "/wall-of-fame" ? "active" : ""}`} aria-current="page" href="/wall-of-fame">Wall of Fame</a>
                    </li> */}
                    {/* <li className="nav-item">
                      <a className={`nav-link ${location.pathname === "/events" ? "active" : ""}`} aria-current="page" href="/events">Events</a>
                    </li> */}
                    {/* <li className="nav-item">
                      <a className={`nav-link ${location.pathname === "/blog" ? "active" : ""}`} aria-current="page" href="/blog">Blogs</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </nav>
            <div 
              id="side" 
              style={{ minHeight: "100vh", width: "100vw", position: "fixed", top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.95)", overflowY: "hidden" }} 
              className="d-none p-4 flex-column text-center align-items-center"
            >
              <div className="w-100 d-flex justify-content-end">
                <i className="lni lni-close text-white font-weight-bold" onClick={toggleSideBar}></i>
              </div>
              <div className="w-100 bg-white my-4" style={{ height: 1 }}></div>
              <ul style={{ height: "50vh" }} className="navbar-nav d-flex flex-column justify-content-center align-items-center mb-2 mb-lg-0">
                <li className="nav-item" style={{ fontSize: "1.3rem" }}>
                  <a style={{ color: "white" }} className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item" style={{ fontSize: "1.3rem" }}>
                  <a style={{ color: "white" }} className="nav-link" aria-current="page" href="/resources">Resources</a>
                </li>
                <li className="nav-item" style={{ fontSize: "1.3rem" }}>
                  <a style={{ color: "white" }} className="nav-link" aria-current="page" href="/team">Team</a>
                </li>
                {/* <li className="nav-item" style={{ fontSize: "1.3rem" }}>
                  <a style={{ color: "white" }} className={`nav-link ${location.pathname === "/alumni" ? "active" : ""}`} aria-current="page" href="/alumni">Alumni</a>
                </li> */}
                {/* <li className="nav-item" style={{ fontSize: "1.3rem" }}>
                  <a style={{ color: "white" }} className={`nav-link ${location.pathname === "/wall-of-fame" ? "active" : ""}`} aria-current="page" href="/wall-of-fame">Wall of Fame</a>
                </li> */}
                {/* <li className="nav-item" style={{ fontSize: "1.3rem" }}>
                  <a style={{ color: "white" }} className={`nav-link ${location.pathname === "/events" ? "active" : ""}`} aria-current="page" href="/events">Events</a>
                </li> */}
                {/* <li className="nav-item" style={{ fontSize: "1.3rem" }}>
                  <a style={{ color: "white" }} className="nav-link" aria-current="page" href="/blog">Blogs</a>
                </li> */}
              </ul>
              <img className="my-4" src={logo} alt="E-Cell Logo" height={100}></img>
              {/* <div className="w-100 bg-white my-4" style={{ height: 1 }}></div> */}
            </div>
        </div>
    );
}

export default NavBar