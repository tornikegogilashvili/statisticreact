import React, { useEffect, useState } from "react"
import "./backgroundSlider.css"
import imageSlide from "./data"
import { Cards } from "./Cards"



const BackgroundSlider = () => {
    const [currentState, setCurrentState] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(currentState);
            if(currentState==6){
                setCurrentState(0)
            }else{
                setCurrentState(currentState+1)
            }
        },10000)
        return () => clearTimeout(timer)
    },[currentState])
    const bgImageStyle = {
        backgroundImage: `url(${imageSlide[currentState]?.url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        // height: "100vh",
        backgroundAttachment: "fixed",
    }
    const goToNext = (currentState) => {
        setCurrentState(currentState)
    }
    return (
        <div className="container_style">
            <div className="bgImageStyle" style={bgImageStyle}></div>
            <div className="description">
                <div>
                    <h2>სოფლის მეურნეობის <br/> სტატისტიკის პორტალი</h2>
                    <Cards />
                </div>
                <div className="carousel-boullt">
                    {
                        imageSlide.map((imageSlide, currentState) => (
                            <span key={currentState} onClick={()=> goToNext(currentState)} >

                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BackgroundSlider