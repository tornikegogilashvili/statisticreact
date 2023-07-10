import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faGlobe,faInfo, } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import "./nav.css"
import { USDA } from './USDA'
import { useState } from 'react'

export const Nav = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

    return(
        <div className='nav_main'>
            <div class="language_changer_div">
                <FontAwesomeIcon icon={faGlobe} />
                <div className='language_changer_div_p'>ქარ</div>
                <FontAwesomeIcon icon={faCheck} />
            </div>  
            <FontAwesomeIcon  onClick={() => {
            if(buttonPopup==false){
                setButtonPopup(true)
            }else{
                setButtonPopup(false)
            }
        }
            } className='fa_info' icon={faInfo} />
            <div class="socialnetwork_div" >
                <FontAwesomeIcon className='nav_icon' icon={faFacebook} />
                <FontAwesomeIcon className='nav_icon' icon={faTwitter} />
                <FontAwesomeIcon className='nav_icon' icon={faLinkedin} />
            </div>
            <USDA trigger={buttonPopup} setTrigger={setButtonPopup}>

            </USDA>
        </div>
    )
}