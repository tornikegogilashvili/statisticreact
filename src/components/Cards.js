import React from "react"
import "./cards.css"
import მცენარე from "../images/მცენარე.png"


export const Cards = () => {
    return(
    <div className="cards_div">
        <div className="cards_div_white">
            <div className="img_div"><img src={მცენარე} /></div>
            <h3>მემცენარეობა</h3>
            <p>ნახვა</p>
        </div>
        <div className="cards_div_white">
            <div className="img_div"><img src={მცენარე} /></div>
            <h3>მემცენარეობა</h3>
            <p>ნახვა</p>
        </div>
        <div className="cards_div_white">
            <div className="img_div"><img src={მცენარე} /></div>
            <h3>მემცენარეობა</h3>
            <p>ნახვა</p>
        </div>
        <div className="cards_div_white">
            <div className="img_div"><img src={მცენარე} /></div>
            <h3>მემცენარეობა</h3>
            <p>ნახვა</p>
        </div>
        <div className="cards_div_white">
            <div className="img_div"><img src={მცენარე} /></div>
            <h3>მემცენარეობა</h3>
            <p>ნახვა</p>
        </div>
    </div>
    )

}