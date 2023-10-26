import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import Loader from "../components/Loader/Loader";
import ResourceCard from "../components/ResourceCard/ResourceCard";

const ResourcePage = () => {

    const [resources, setResources] = useState();
    const [loading, setLoading] = useState(true);

    const typesToPaths = [
        { type: "blog", path: "blogs", tagline: "Byte sized entrepreneurship advice" },
        { type: "event", path: "events", tagline: "Hands-on experience alongside the professionals" },
        { type: "web series", path: "web series", tagline: "Entertainment coupled with knowledge" },
        { type: "podcast", path: "podcasts", tagline: "Hear from the best in the business" },
        { type: "video", path: "videos", tagline: "Watch and learn on the go" },
        { type: "newsletter", path: "newsletters", tagline: "Get regular updates from your favourite sources" }
    ]

    const param = useParams();
    var typetoPathObj = typesToPaths.filter(obj => {
        return obj.path === param.type
    })   

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/api/resources/${typetoPathObj[0].type}`)
            .then((res) => res.json())
            .then((data) => {
                setResources(data.data)
                setLoading(false)
            })
    }, [typetoPathObj])

    return (
        <div className="w-full text-white py-4 px-md-5 min-vh-100 px-1">
            <div className="mx-auto d-flex flex-column text-center text-md-left">
                <div className="sticky-top w-100 mx-auto back-to-all">
                    <Link to="/resources">
                        <div className="d-flex align-items-center my-2 text-white" style={{ paddingTop: 60 }}>
                            <i className="lni lni-chevron-left mx-1"></i>
                            <p className="my-auto mx-1" style={{ fontSize: "1.1rem" }}>Back to all resources</p>
                        </div>
                    </Link>
                </div>
                <div className="container mx-auto text-left">
                    <p className="black-text p-0 m-0" style={{ fontSize: "4rem" }}>{typetoPathObj[0].path.split("")[0].toUpperCase() + typetoPathObj[0].path.slice(1)}</p>
                    <p className="regular-text p-0 mx-0" style={{ fontSize: "1.4rem", marginTop: "-5px", color: "#5CE1E6" }}>{typetoPathObj[0].tagline}</p>
                </div>  
                <div className="d-flex flex-column mx-auto h-full mx-1 my-3 px-md-5 px-2 res-wrapper">
                    {
                        !loading ?
                        resources.map((data) => {
                            return <ResourceCard data={data}/> 
                        }) 
                        : <Loader />
                    }                         
                </div>
            </div>
        </div>
    )
}

export default ResourcePage