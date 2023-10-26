import React, { useEffect, useState } from "react";
import BlogPin from "../components/BlogPin/BlogPin";
import Loader from "../components/Loader/Loader";
const BlogPins = () => {

    const [blogs, setBlogs] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/api/blog`)
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data.data)
                setLoading(false)
            })
    }, [])

    return (
        <div className="w-full text-white pb-4 min-vh-100">
            <div className="mx-auto d-flex flex-column text-center text-md-left">
                <div className="mx-auto w-100 blog-back" style={{ minHeight: "32vh" }}>
                    <div className="text-left d-flex align-items-end w-100 p-4" style={{ minHeight: "32vh", backgroundColor: "rgba(0, 0, 0, 0.6)", height: "100%", width: "100%" }}>
                        <div className="d-flex flex-column">
                            <h1 className="black-text p-0 m-0">The E-Cell Blog</h1>
                            <p className="regular-text p-0 mx-0" style={{ fontSize: "1.6rem", marginTop: "-5px", color: "#5CE1E6" }}>The Department of Content</p>
                        </div>
                    </div>
                </div>  
                <div className={`row gap-2 px-4 justify-content-${loading ? "center" : "start"}`}>
                    {
                        !loading ?
                        blogs.map((data) => {
                            return <BlogPin data={data}/> 
                        }) 
                        : <Loader />
                    }                     
                </div>
            </div>
        </div>
    )
}

export default BlogPins