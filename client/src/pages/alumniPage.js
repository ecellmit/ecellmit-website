import React, { useEffect, useState } from "react"
import { useSpring, animated } from "react-spring";
import AlumniCard from "../components/AlumniCard";
import Loader from "./../components/Loader/Loader"

const AlumniPage = () => {

    const slideDownSpring = useSpring({
        transform: "translateY(0px)",
        opacity: 1,
        from: {
            opacity: 0,
            transform: "translateY(-50px)"
        }   
    })

    const slideUpSpring = useSpring({
        transform: "translateY(0px)",
        opacity: 1,
        from: {
            opacity: 0,
            transform: "translateY(50px)"
        }   
    })

    const [arrOfAlumni, setArrOfAlumni] = useState([])
    const [loading, setLoading] = useState(true)
    let years = []

    useEffect(() => {
        const calculateYears = () => {
            // calculate the number of years based on current year
            let date = new Date();
            let currentYear = date.getFullYear();
            for(let i = 0; i <= currentYear - 2021; i++) {
                years.push(21 + i);
            }
        }
        calculateYears();
        years.forEach((year) => {
            fetch(`${process.env.REACT_APP_SERVER_URL}/api/alumni/${year}`)
                .then((res) => res.json())
                .then((data) => {
                    setArrOfAlumni(data.data)
                    setLoading(false)
                })
        })
    }, [])

    return (
        <div className="w-full text-white py-4 px-md-5 min-vh-100 px-1">
            <div className="mx-auto d-flex flex-column text-center text-md-left">
                <div className="mx-auto w-100 alumni-back text-center">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "30vh" }}>
                        <animated.p style={ slideDownSpring } className="display-4 mt-3 bold-text mb-0">The Founders</animated.p>
                        <animated.p className="font-weight-light m-0" style={{ ...slideUpSpring, fontSize: "1.3rem" }}>of The Entrepreneurship Cell <br></br> of MIT Manipal</animated.p>
                    </div>
                    <div className="text-left d-flex align-items-end w-100 p-4" style={{ minHeight: "35vh", height: "100%", width: "100%" }}>
                        <div className="w-100 row d-flex flex-row align-items-center justify-content-center">
                            <div className="col-md-3 d-flex flex-column align-items-center my-md-0 my-2">
                                <img alt="Ankit Jajoo" src="https://i.ibb.co/JcvP9yY/Ankit-Jajoo.jpg" style={{ height: "64%", width: "64%", borderRadius: "50%", border: "10px solid #050505" }}></img>
                                <h6 className="bold-text mt-3" style={{ fontSize: "1.55rem" }}>Ankit Jajoo</h6>
                                <h6 className="font-weight-light p-0" style={{ fontSize: "1.2rem" }}>Founding Deputy Chairperson</h6>
                            </div>
                            <div className="col-md-3 d-flex flex-column align-items-center my-md-0 my-2">
                                <img alt="Dhwanit Shah" src="https://i.ibb.co/582X9KG/Dhwanit-Shah.jpg" style={{ height: "64%", width: "64%", borderRadius: "50%", border: "10px solid #050505" }}></img>
                                <h6 className="bold-text mt-3" style={{ fontSize: "1.55rem" }}>Dhwanit Shah</h6>
                                <h6 className="font-weight-light p-0" style={{ fontSize: "1.2rem" }}>Founding Chairperson</h6>
                            </div>
                            <div className="col-md-3 d-flex flex-column align-items-center my-md-0 my-2">
                                <img alt="Armaan Charania" src="https://i.ibb.co/rkD2hXn/Armaan-Charania.jpg" style={{ height: "64%", width: "64%", borderRadius: "50%", border: "10px solid #050505" }}></img>
                                <h6 className="bold-text mt-3" style={{ fontSize: "1.55rem" }}>Armaan Charania</h6>
                                <h6 className="font-weight-light p-0" style={{ fontSize: "1.2rem" }}>Founding Deputy Chairperson</h6>
                            </div>
                        </div>
                    </div>  
                </div>
                {
                    loading 
                    ?
                    <Loader />
                    :
                    <div className="w-75 d-flex flex-column mx-auto justify-content-center h-full mx-1 my-1">
                        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "30vh" }}>
                            <p className=" mt-3 bold-text mb-0" style={{ fontSize: "2.5rem" }}>The Board of <span style={{ color: "#5CE1E6" }}>20{arrOfAlumni[0].year - 1}-20{arrOfAlumni[0].year}</span></p>
                        </div>
                        <div className="row gap-1">
                        {
                            arrOfAlumni.map((alumni, index) => {   
                                return (
                                    <AlumniCard key={index} data={alumni}/>
                                )    
                            })
                        }
                        </div>    
                    </div>
                }
            </div>
        </div>
    )
}

export default AlumniPage