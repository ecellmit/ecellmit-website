import React from "react"
import "./BlogPin.css"

const BlogPin = () => {
    return (
        <div className="col-md-5 col-lg-4 col-12 p-md-3 blog-pin text-white">
            <div className="d-flex flex-column justify-content-center my-3">
                <div className="d-flex flex-xl-row flex-column">
                    <img className="blog-image px-md-2 py-1" src="https://i.pinimg.com/736x/9d/18/35/9d183514b670677699323c9033b38d91.jpg" alt="Blog cover" />
                    <div className="d-flex flex-column w-md-50 w-100 align-items-start">
                        <a href="#" target="_blank" className="blog-title">
                            <p className="text-white text-left px-md-2 bold-text" style={{ fontSize: "2.1rem" }}>This is a long blog title for test</p>
                        </a>
                        <div className="px-md-2 w-100" style={{ height: "1px", backgroundColor: "#1b1b1b" }}></div>
                        <div className="d-flex py-3 px-md-2 px-1 flex-column justify-content-between align-items-start">
                            <div className="d-flex my-2 align-items-center">
                                <i className="lni lni-pencil-alt"></i>
                                <p className="text-white mx-2 my-auto">Writer Name, Writer Name</p>
                            </div>
                            <div className="d-flex my-2 align-items-center">
                                <i className="lni lni-calendar"></i>
                                <p className="text-white mx-2 my-auto">23 September 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-md-2 my-2" style={{ height: "1px", backgroundColor: "#1b1b1b" }}></div>
                <p className="m-0 px-md-2 text-left" style={{ color: "#5CE1E6", fontSize: "1.6rem", fontWeight: "bold" }}>An Excerpt</p>
                <p className="my-1 px-md-2 text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                    <span className="mx-1">
                        <a target="_blank" href="#" style={{ color: "#5CE1E6", textDecoration: "none" }}>Read full blog</a>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default BlogPin