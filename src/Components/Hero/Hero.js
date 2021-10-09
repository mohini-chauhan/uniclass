import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock,faGlobe,faEye} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="herocontent">
                <div className="herocontent1">
                    <p>Developing</p>
                    <h1>Full Stack Java Developer with ReactJS</h1>
                    <FontAwesomeIcon  icon={faClock}/><span> 3 months</span>
                    <FontAwesomeIcon  icon={faGlobe}/><span>English, Hindi</span>
                    <FontAwesomeIcon  icon={faEye}/><span>320</span>
                    <div className="hero-btn">
                    <button>Download Brochure</button>
                    </div>
                </div>
                <div className="hero-pricing">
                    <p className="price">₹9999.00</p>
                    <p className="discount"><s>₹14330.00 </s><span>40% Off</span></p>
                </div>


            </div>
        </div>
    )
}

export default Hero
