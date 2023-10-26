import React from "react"
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";


const ResourceTile = ({type, image}) => {

    const slideSpring = useSpring({
        delay: 10,
        transform: "translateY(0px)",
        opacity: 1,
        from: {
            opacity: 0,
            transform: "translateY(50px)"
        }   
    })

    const onHover = () => {
        let overlay = document.getElementById(`overlay-${type}`); 
        overlay.classList.remove("d-none");
        overlay.classList.add("d-flex");
    }
    
    const onUnHover = () => {
        let overlay = document.getElementById(`overlay-${type}`); 
        overlay.classList.remove("d-flex");
        overlay.classList.add("d-none");
    }

    return (
        <Link to={`/resources/${type.toLowerCase()}`}>
            <animated.div className="col my-3" style={{ ...slideSpring, cursor: "pointer" }} onMouseEnter={onHover} onMouseLeave={onUnHover}>
                <div className="w-100">
                    <div className="h-100 mx-auto d-none position-absolute overlay-card" style={{ width: "91.5%" }} id={`overlay-${type}`}>
                        <div  
                            style={{ left: 0, fontSize: "1.3rem" }} 
                            className="position-absolute w-100 h-100 bold-text liq-text text-center d-flex justify-content-center align-items-center"
                        >
                            {type}
                        </div>                        
                    </div>
                    <img src={image} alt={type} height={200} className="w-100" style={{ objectFit: "cover" }}></img>
                    <div  
                        style={{ fontSize: "1.3rem", backgroundColor: "rgba(0, 0, 0, 0.479)" }} 
                        className="mx-auto text-white h-100 w-100 bold-text liq-text text-center d-flex justify-content-center align-items-center"
                    >
                        {type}
                    </div>
                </div>
            </animated.div>
        </Link>
    )
}

export default ResourceTile