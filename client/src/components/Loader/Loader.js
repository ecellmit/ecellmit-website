import React from "react"
import "./Loader.css"
import logo from "./../../assets/eCellLight.png"

const Loader = () => {
    return (
        <div className="d-flex flex-column align-items-center my-3">
            <img src={logo} alt="ECell Logo" height={100} className="my-3"></img>
            <div className="loading"></div>
        </div>
    )
} 

export default Loader