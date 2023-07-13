import React from "react"
import "./cards.css"
import მცენარე from "../images/მცენარე.png"
import მეცხოველეობა from "../images/ძროხა (1).png"
import აკვაკულტურა from "../images/თევზი.png"
import სასურსათობალანსი from "../images/სურსათი.png"
import ძირითადიინფო from "../images/ძირითადი ინფო.png"

export const Cards = () => {
    return(
    <div className="cards_div">
        <div className="cards_div_white">
            <div className="img_div"><img src={მცენარე} alt="მემცენარეობა" /></div>
            <h3>მემცენარეობა</h3>
            <p>ნახვა</p>
        </div>
        <div className="cards_div_white">
            <div className="img_div"><img src={მეცხოველეობა} alt="მეცხოველეობა" /></div>
            <h3>მემცენარეობა</h3>
            <p>ნახვა</p>
        </div>
        <div className="cards_div_white">
            <div className="img_div"><img src={აკვაკულტურა} alt="აკვაკულტურა" /></div>
            <h3>მემცენარეობა</h3>
            <p>ნახვა</p>
        </div>
        <div className="cards_div_white">
            <div className="img_div"><img src={სასურსათობალანსი} alt="სასურსათობალანსი" /></div>
            <h3>მემცენარეობა</h3>
            <p>ნახვა</p>
        </div>
        <div className="cards_div_white">
            <div className="img_div"><img src={ძირითადიინფო} alt="ძირითადიინფო" /></div>
            <h3>მემცენარეობა</h3>
            <p>ნახვა</p>
        </div>
        <div className="line_div"></div>
    </div>
    )

}