import React from "react"
import ResourceTile from "../components/ResourceTile";

// importing tile images
import blog from "./../assets/learning/blog.jpg";
import event from "./../assets/learning/events.jpeg";
import newsletter from "./../assets/learning/newsletter.jpeg";
import podcast from "./../assets/learning/podcast.jpeg";
import videos from "./../assets/learning/videos.jpg";
import webseries from "./../assets/learning/webseries.jpeg";

const ResourcesPage = () => {
    return (
        <div className="w-full text-white py-4 px-md-5 min-vh-100 px-1">
            <div className="mx-auto d-flex flex-column text-center text-md-left">
                <div className="w-75 mx-auto">
                    <p className="black-text p-0 m-0" style={{ fontSize: "3.5rem" }}>Resources</p>
                    <p className="regular-text p-0 mx-0" style={{ fontSize: "1.5rem", marginTop: "-5px" }}>Learn with E-Cell MIT</p>
                </div>  
                <div className="row row-cols-md-4 row-cols-1 w-75 mx-auto justify-content-center h-full mx-1 my-1">
                    <ResourceTile type="Blogs" image={blog}/>
                    <ResourceTile type="Events" image={event}/>
                    <ResourceTile type="Web Series" image={webseries}/>
                    <ResourceTile type="Podcasts" image={podcast}/>
                    <ResourceTile type="Videos" image={videos}/>
                    <ResourceTile type="Newsletters" image={newsletter}/>
                </div>
            </div>
        </div>
    )
}

export default ResourcesPage