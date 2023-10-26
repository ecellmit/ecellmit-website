import React from "react"
import { Link } from "react-router-dom"
import logo from "./../assets/eCellLight.png"

const Footer = () => {
    return (
        <footer>
            <div className="row m-0 row-cols-md-3 row-cols-1 container-fluid" style={{ backgroundColor: "#0E0E0E", minHeight: "30vh" }}>
                <div className="row row-cols-2 p-5 mx-auto align-items-center">
                    <div className="col d-flex flex-column align-items-center justify-content-center text-center" style={{ height: "fit-content", borderRight: "1px solid rgba(255, 255, 255, 0.4)" }}>
                        <Link to="/" className="text-white" style={{ fontSize: "1.2rem" }}>
                            <p>Home</p>
                        </Link>
                        {/* <Link to="/blog" className="text-white" style={{ fontSize: "1.2rem" }}>
                            <p>Blogs</p>
                        </Link> */}
                        <Link to="/resources" className="text-white" style={{ fontSize: "1.2rem" }}>
                            <p>Resources</p>
                        </Link>
                    </div>
                    <div className="col d-flex flex-column align-items-center justify-content-center text-center" style={{ height: "fit-content" }}>
                        {/* <Link to="/alumni" className="text-white" style={{ fontSize: "1.2rem" }}>
                            <p>Alumni</p>
                        </Link> */}
                        <Link to="/team" className="text-white" style={{ fontSize: "1.2rem" }}>
                            <p>Team</p>
                        </Link>
                        <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1Gayd0kulzgSqBfH21i5nl09gwfVnXovp/view?usp=sharing" className="text-white" style={{ fontSize: "1.2rem" }}>
                            <p>Brochure</p>
                        </a>
                        {/* <Link to="/wall-of-fame" className="text-white" style={{ fontSize: "1.2rem" }}>
                            <p>Wall Of Fame</p>
                        </Link> */}
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center p-2">    
                    <img src={logo} alt="E-Cell logo" height={180}></img>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center text-white text-center p-3">
                    <h2 style={{ fontSize: "1.7rem" }}>The Entrepreneurship Cell</h2>
                    <h3 style={{ fontSize: "1.5rem" }}>MIT, Manipal</h3>
                    <div className="d-flex align-items-center">
                        <a href="/dev-team" style={{ fontSize: "1.2rem", color: "#5CE1E6" }}>Made at E-Cell</a>
                        <p className="pt-1 mx-2 my-0" style={{ fontSize: "1.8rem" }}>©</p>
                        <p style={{ fontSize: "1.4rem" }} className="m-0"> 2021</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer