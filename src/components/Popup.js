import { useState } from "react";
import { USDA } from "./USDA"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faGlobe,faInfo, } from '@fortawesome/free-solid-svg-icons'
import "./popup.css"

export const Popup =(props) => {
    const [buttonPopup, setButtonPopup] = useState(false);

    return( 
        <div>

        <FontAwesomeIcon  onClick={() => {
            if(buttonPopup==false){
                setButtonPopup(true)
            }else{
                setButtonPopup(false)
            }
        }
            } className='fa_info i_button' icon={faInfo} />
        <USDA trigger={buttonPopup} setTrigger={setButtonPopup}>

        </USDA>
        </div>
    )
}