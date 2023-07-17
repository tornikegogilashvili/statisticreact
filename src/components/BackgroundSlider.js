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
        },5000)
        return () => clearTimeout(timer)
    },[currentState])

    document.body.style.backgroundImage = `url(${imageSlide[currentState]?.url})`;
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";

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
            <div className="bgImageStyle" ></div>
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
                <p className="footer_p">2023 საქართველოს სტატისტიკის ეროვნული სამსახური
<br/><a href="#">მონაცემთა გამოყენების პირობები</a></p>
            </div>
        </div>
    )
}

export default BackgroundSlider