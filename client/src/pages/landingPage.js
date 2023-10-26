import React, { useRef } from "react"
import emailjs from '@emailjs/browser';

import logo from "./../assets/eCellLight.png"
import kithandkin from "./../assets/partners/kithandkin.png"
import startupschool from "./../assets/partners/startupschool.png"
import buddy from "./../assets/initiatives/buddy.png"
import startups from "./../assets/initiatives/startup.png"
import idea from "./../assets/initiatives/ideaMeet.png"
import bmodel from "./../assets/initiatives/bModel.png"
import rural from "./../assets/initiatives/rural.png"
import camps from "./../assets/initiatives/camps.png"

const LandingPage = () => {

    const form = useRef();

    // function to handle the submission of the contact form
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                if(result.text === "OK") {
                    document.getElementById("receive").style.display = "block"
                    setTimeout(() => {
                        document.getElementById("receive").style.display = "none"
                    }, 3000)
                }
            }, (error) => {
                document.getElementById("no-receive").style.display = "block"
                    setTimeout(() => {
                        document.getElementById("no-receive").style.display = "none"
                    }, 3000)
            });
    }

    return (
        <div>
            <div className="ic-image w-full text-white py-4 px-md-5 min-vh-100 px-1">
                <div className="w-full min-vh-100 d-flex flex-column align-items-center justify-content-center">
                    <img src={logo} width={200} alt="E-Cell Logo"/>
                    <p className="stroke-text m-0">Bringing ideas</p>
                    <p className="stroke-text m-0">to life</p>
                </div>    
            </div>
            <div className="slanted-container d-flex align-items-center">
                <div className="mx-auto d-flex flex-column p-md-5 p-2">
                    <p className="text-white bold-text m-0">We are the</p>
                    <p className="black-text m-0" style={{ color: "black" }}>Entrepreneurship Cell</p>
                    <p className="text-white bold-text m-0">of Manipal Institute of Technology</p>
                    <a href="#contact" className="bg-transparent my-3 p-2 text-white bold-text" style={{ fontSize: "1.5rem", width: "fit-content", border: "solid white 3px", borderRadius: "5px" }}>
                        Get In Touch
                    </a>
                </div>
            </div>
            <div className="text-white py-4 py-md-5 px-1">
                <div className="container py-5 justify-content-center d-flex flex-md-row flex-column align-items-center">
                    <div>
                        <h6 className="black-text px-2" style={{ fontSize: "3rem" }}>Mission</h6>
                        <p className="regular-text px-2" style={{ fontSize: "1.3rem" }}>
                            To inculcate the spirit of entrepreneurship within the student community through greater awareness and act as a one-stop destination for all students looking 
                            to convert their ideas into viable start-ups.
                        </p>
                    </div>
                    <div>
                        <h6 className="black-text px-2" style={{ fontSize: "3rem" }}>Vision</h6>
                        <p className="regular-text px-2" style={{ fontSize: "1.3rem" }}>
                            To empower entrepreneurs by providing them with a vibrant start-up ecosystem and developing ideas into successful ventures through 
                            dedicated mentorship and guidance.
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-3 mx-auto py-4 three-fourth-container">
                <h5 className="text-white black-text" style={{ fontSize: "2.7rem" }}>Initiatives</h5>
                <div className="d-flex flex-wrap row">
                    <div className="col-md-4 col-12 my-3 initiative-card">
                        <img src={buddy} className="w-100" alt="Buddy Programs" style={{ borderRadius: "1rem" }}></img>
                    </div>
                    <div className="col-md-4 col-12 my-3 initiative-card">
                        <img src={startups} className="w-100" alt="Startup Visits" style={{ borderRadius: "1rem" }}></img>
                    </div>
                    <div className="col-md-4 col-12 my-3 initiative-card">
                        <img src={idea} className="w-100" alt="Idea Validation Meetups" style={{ borderRadius: "1rem" }}></img>
                    </div>
                    <div className="col-md-4 col-12 my-3 initiative-card">
                        <img src={bmodel} className="w-100" alt="B-Model Competition" style={{ borderRadius: "1rem" }}></img>
                    </div>
                    <div className="col-md-4 col-12 my-3 initiative-card">
                        <img src={rural} className="w-100" alt="Rural Entrepreurship Division" style={{ borderRadius: "1rem" }}></img>
                    </div>
                    <div className="col-md-4 col-12 my-3 initiative-card">
                        <img src={camps} className="w-100" alt="Camps and Workshops" style={{ borderRadius: "1rem" }}></img>
                    </div>
                </div>
            </div>
            <div className="px-3 mx-auto py-4 three-fourth-container">
                <h5 className="text-white black-text" style={{ fontSize: "2.7rem" }}>Partners</h5>
                <div className="d-flex flex-wrap row">
                    <div className="col-md-6 col-12 my-2 partner-card">
                        <a href="https://www.kinandkith.in/" target="_blank" rel="noreferrer">
                            <img src={kithandkin} className="w-100" alt="Kith and Kin"></img>
                        </a>
                    </div>
                    <div className="col-md-6 col-12 my-2 partner-card">
                        <a href="https://ibhubs.co/startupschool/" target="_blank" rel="noreferrer">
                            <img src={startupschool} className="w-100" alt="Kith and Kin"></img>
                        </a>
                    </div>
                </div>
            </div>
            <div className="px-3 mx-auto py-4 three-fourth-container">
                <h5 className="text-white black-text" style={{ fontSize: "2.7rem" }}>Director's Note</h5>
                <div className="d-flex flex-md-row flex-column my-2">
                    <img className="dir-image" src="https://i.ibb.co/4TjGXK2/director.jpg" alt="Director"></img>
                    <div className="px-md-2 my-2 my-md-0 text-white">
                        <h6 className="mt-2" style={{ color: "#5CE1E6", fontSize: "1.2rem", borderBottom: "#5CE1E6 2px solid", paddingBottom: "10px" }}>CDR. DR. ANIL RANA</h6>
                        <p>Youth unemployment is one of the major challenges that India and the whole world is facing in present times. According to world bank estimate globally we need 600 million new jobs in the next 10 years to keep global employment constant. India’s unemployment rate is estimated to be 7.11 percent and is set to rise due to pandemic situation.</p>
                        <p>Our Prime Minister has also stressed the need for Atmanirbhar Bharat and encouraged the need for new businesses to be established to provide solutions for large scale unemployment. Youth entrepreneurship attempts to provide inventive answers for economic growth among young adults. Keeping this in mind MIT has launched an E -Cell where, our students would be encouraged and trained to become successful entrepreneurs by equipping them with specialized skill sets. </p>
                        <p>Starting a business can be full of challenges but it is a beneficial quest which leads to attaining wealth of knowledge, impressive skill sets, and most importantly the ability to face and overcome failures. Our students will acquire the confidence to deal with the real-world problems and follow their dreams.</p>
                        <p>MIT E-cell will help students develop an inquisitive, analytical, creative and entrepreneurial mindset. It will also help them through various support programs to seek the entrepreneurial pathway and channel their skill sets into successful business ventures.</p>
                    </div>

                </div>
            </div>
            <div className="px-4 mx-auto py-4 d-flex flex-column align-items-md-center" id="#contact"> 
                <h5 className="text-white black-text" style={{ fontSize: "2.7rem" }}>Contact Us</h5>
                <p className="text-white" style={{ fontSize: "1.3rem" }}>Reach out to us at <span><a style={{ color: "#5CE1E6" }} href="mailto:ecell.mit@manipal.edu" rel="noreferrer" target="_blank">ecell.mit@manipal.edu</a></span> for more information!</p>
                <form ref={form} className="contact-form">
                    <div className="d-flex flex-column my-1">
                        <label htmlFor="name" className="text-white m-0">Name</label>
                        <input placeholder="How do we know you?" required name="from_name" className="p-2 my-1 bg-transparent" autoComplete="off" style={{ caretColor: "white", color: "white", border: "1px solid #121212" }}></input>
                    </div>
                    <div className="d-flex flex-column my-1">
                        <label htmlFor="name" className="text-white m-0">Email ID</label>
                        <input placeholder="Where do we reach out to you?" required name="from_email" className="p-2 my-1 bg-transparent" autoComplete="off" style={{ caretColor: "white", color: "white", border: "1px solid #121212" }}></input>
                    </div>
                    <div className="d-flex flex-column my-1">
                        <label htmlFor="name" className="text-white m-0">Message</label>
                        <textarea placeholder="What's on your mind?" required name="message" className="p-2 my-1 bg-transparent" autoComplete="off" style={{ minHeight: 100, maxHeight: 150, caretColor: "white", color: "white", border: "1px solid #121212" }}></textarea>
                    </div>
                    <p style={{ display: "none", color: "#5CE1E6" }} id="receive">We have received your message!</p>
                    <p style={{ display: "none", color: "red" }} id="no-receive">Oops! There was a problem sending your message.</p>
                    <button className="px-4 py-2 border-0 rounded-lg my-2" type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default LandingPage