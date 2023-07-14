import React from "react"
import "./card.css"
import imageSlide from "./data"




export const Card = ({currentState}) => {
    return(
        <div className="main_card">
            <div className="card">
                <div>
                    <img src={imageSlide[currentState]?.img} />
                    <p className="card_p">{imageSlide[currentState]?.img_name}</p>
                </div>
                <p className="card_amount">{imageSlide[currentState]?.amount}</p>
            </div>
            <div className="card">
                <div>
                    <img src={imageSlide[currentState]?.img2} />
                    <p className="card_p">{imageSlide[currentState]?.img_name2}</p>
                </div>
                <p className="card_amount">{imageSlide[currentState]?.amount2}</p>
            </div>
            <div className="card">
                <div>
                    <img src={imageSlide[currentState]?.img3} />
                    <p className="card_p">{imageSlide[currentState]?.img_name3}</p>
                </div>
                <p className="card_amount">{imageSlide[currentState]?.amount3}</p>
            </div>
            <div className="card">
                <div>
                    <img src={imageSlide[currentState]?.img4} />
                    <p className="card_p">{imageSlide[currentState]?.img_name4}</p>
                </div>
                <p className="card_amount">{imageSlide[currentState]?.amount4}</p>
            </div>
        </div>
    )
}