import React, { useEffect, useState } from "react"
import "./backgroundSlider.css"
import imageSlide from "./data"
import { Cards } from "./Cards"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Card } from "./Card"


const BackgroundSlider = () => {
    const [currentState, setCurrentState] = useState(0);
    useEffect(() => {
        console.log("first", currentState);
        if(currentState==7){
            setCurrentState(0)
        }else if(currentState==-1){
            setCurrentState(6)
        }
        const timer = setTimeout(() => {
            if(currentState==6){
                setCurrentState(0)
            }else{
                setCurrentState(currentState+1)
            }
        },200000)
        return () => clearTimeout(timer)
    },[currentState])

    const bgImageStyle = {
        backgroundImage: `url(${imageSlide[currentState]?.url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        // height: "100%",
        backgroundAttachment: "fixed",
    }
    const goToNext = (currentState) => {
        setCurrentState(currentState)
    }
    const previous = (currentState) => {
            setCurrentState(currentState)
    }
    const next = (currentState) => {
        setCurrentState(currentState)
    }
    // useEffect(() => {
    //     console.log("second", currentState);
    //     if(currentState==6){
    //         setCurrentState(0)
    //     }else{
    //         setCurrentState(currentState-1)
    //     }
    // },)

    return (
        <div className="container_style">
            <div className="bgImageStyle" style={bgImageStyle}></div>
            <div className="description">
                <div>
                    <h2>სოფლის მეურნეობის <br/> სტატისტიკის პორტალი</h2>
                    <Cards />
                    <p className="description_p">{imageSlide[currentState]?.title}</p>
                    <FontAwesomeIcon onClick={()=>previous(currentState-1)} className="slide_arrow" icon={faArrowLeft} />
                    <FontAwesomeIcon onClick={()=>next(currentState+1)}  className="slide_arrow" icon={faArrowRight} />
                    <Card currentState={currentState} />
                </div>
                <div className="carousel-boullt">
                    {
                        imageSlide.map((imageSlide, currentState) => (
                            <span  className="carousel_span" key={currentState} onClick={()=> {goToNext(currentState)}}  >

                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BackgroundSlider