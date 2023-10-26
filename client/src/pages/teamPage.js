import React, { useEffect, useState } from "react"
import TeamCard from "../components/TeamCard"
import Loader from "./../components/Loader/Loader"

import { useSpring, animated } from "react-spring";

const TeamPage = () => {

    const [team, setTeam] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/api/team/board`)
            .then((res) => res.json())
            .then((data) => {
                setTeam(data.data)
                setLoading(false)
            })
    }, [])

    const slideSpring = useSpring({
        transform: "translateY(0px)",
        opacity: 1,
        from: {
            opacity: 0,
            transform: "translateX(-100px)"
        }   
    })

    return (
        <div className="w-full min-vh-100 d-flex flex-column py-md-4 mx-auto align-items-center h-full mx-1 my-1">
            <animated.h3 className="black-text text-white" style={{ ...slideSpring, fontSize: "2.7rem" }}>Meet the Team</animated.h3>
            <div className="w-75 mt-5 d-flex flex-column mx-auto justify-content-center align-items-center h-full mx-1 my-1">
            {
                !loading ?
                <div className="row gap-1 px-md-5">
                    {
                        team.map((member, index) => {
                            return <TeamCard key={index} data={member}/>
                        })
                    }    
                </div>
                : <Loader />
            }
            </div>
        </div>
    )
}

export default TeamPage