import React from "react";
import DevCard from "../components/DevCard/DevCard";
import devs  from "./../assets/devs/devs"

const DevTeam = () => {
    return (
        <div className="w-full text-white py-4 min-vh-100">
            <div className="dev-container mx-auto px-md-0 px-3">
                <div className="d-flex flex-column">
                    <h4 className="black-text" style={{ fontSize: "2.5rem" }}>The Website</h4>
                    <p className="m-0" style={{ fontSize: "1.2rem" }}><span style={{ color: "#5CE1E6" }}>ecellmit.com</span> is the official website of The Entrepreneurship Cell 
                    of Manipal Institute of Technology, Manipal. It has been developed in house by a team of developers, consisting of students of MIT, Manipal. In 
                    addition to a neat and responsive UI, the website is filled with informational content, learning resources and an enthusiastic bunch of people ready to innovate.</p>
                </div>
                <div className="my-4">
                    <p className="m-0 text-muted font-weight-bold my-1">TECH STACK</p>
                    <div className="d-flex my-1">
                        {
                            ["react", "css3", "bootstrap", "javascript", "nodejs"].map((icon) => {
                                return <i key={icon} style={{ fontSize: "2.5rem" }} className={`lni lni-${icon} mr-2`}></i>
                            })
                        }
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <h4 className="black-text" style={{ fontSize: "2.5rem" }}>The Developers</h4>
                    <p style={{ fontSize: "1.2rem" }}>
                        Hailing from various domains of the E-Cell, this team of enthusiastic developers, united by a common goal, made this website possible. 
                    </p>
                </div>
                <div className="d-flex flex-md-row flex-column my-3">
                    {
                        devs.map((dev, index) => {
                            return (
                                <DevCard key={index} data={dev}/>
                            )
                        })
                    }
                </div>
                <div className="d-flex flex-column">
                    <h4 className="black-text" style={{ fontSize: "2.5rem" }}>Found a Bug?</h4>
                    <p className="m-0" style={{ fontSize: "1.2rem" }}>
                        We at E-Cell take pride in keeping our website fast and responsive. If you find a bug, do reach out to us and drop a mail to <a href="mailto:mailto:ecell.mit@manipal.edu" style={{ color: "#5CE1E6" }}>ecell.mit@manipal.edu</a> 
                    </p>
                </div>
                <a href="/">
                    <button className="dev-back bg-transparent my-3 ">Back to main site</button>
                </a>
            </div>
        </div>   
    );
}

export default DevTeam;