import React from "react";
import "./ResourceCard.css"
import { useSpring, animated } from "react-spring";

const ResourceCard = ({data}) => {   

    const slideSpring = useSpring({
        delay: 10,
        transform: "translateX(0px)",
        from: {
            transform: "translateX(-50px)"
        }   
    })

    return (
        <animated.div style={slideSpring} className="col d-flex flex-md-row flex-column my-2 res-card">
            <div className="bg-white p-2 res-image">
                <a href={data.urlLink} rel="noreferrer" target="_blank">
                    <img alt={data.name} src={data.photo} className="h-100 w-100" style={{ objectFit: "cover" }}></img>
                </a>
            </div>
            <div className="w-100 d-flex flex-column text-left px-md-3 align-items-start my-md-0 my-2">
                <a href={data.urlLink} rel="noreferrer" target="_blank" className="res-link">
                    <h2 className="bold-text text-white">{data.heading}</h2>
                </a>
                <div className="text-left d-flex">
                    {
                        data.tags.map((tag) => {
                            return <p className="px-2 py-1 text-dark mx-1 text-center" style={{ borderRadius: 20, fontSize: "1.2rem", backgroundColor: "#5CE1E6" }}>{tag}</p>
                        })
                    }
                </div>
                <div className="text-left">
                    <p className="res-text">{data.subheading}</p>
                </div>
            </div>
        </animated.div>
    )
}

export default ResourceCard;