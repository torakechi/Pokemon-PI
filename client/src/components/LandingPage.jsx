import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import s from "../styles/landingPage.module.css"
import pokeVideo from "../media/pokeVideo.mp4"
import ToggleSwitch from "../media/toggleSwitch/ToggleSwitch";
export default function LandingPage() {
    
const handleClickVideo = () =>{
    const video = document.getElementById("video");
    video.muted = !video.muted;
}
    return (
        <div className={s.landingPage}>
            <div onChange={handleClickVideo}>
      <ToggleSwitch label=' '/>
      <p id='parrafo' style={{display: "flex", position: "absolute", top: "5px", left: "100px", color: "white", fontWeight: "bold"}}>Press YES for a better experience</p>
      </div>
      <video id='video' autoPlay muted loop src={pokeVideo} style={{position:'absolute',width:'100%',left:'50%',top:'50%',height:'100%',objectFit:'cover',transform:'translate(-50%, -50%)',zIndex:'-1'}}>
      </video>
            <h1>Henry Pokemon PI App</h1>
            <Link to="/home">
                <button><i>Ingresar</i></button>
            </Link>
        </div>
    )
}