import React from 'react'
import hand from "./hand.svg"
import heart from "./heart.svg"
import rect from "./rect.svg"
import recto from "./recto.svg"
import shield from "./shield.svg"
import star from "./star.svg"
function features(image,para){
return(
    <div className="featurebox">
        <div className="icon-circle">
            <img src={image} alt="feature-img"/>
        </div>
        
        <p>{para}</p>
    </div>
)

}
const Feature = () => {
    var str1="AICTE-recognized and AACSB-accredited PGDM certificate by Jagdish Sheth School of Management"
    var str2="Program ranked in the 51-100 band globally in the QS Masters Rankings"
    var str3="Learn from the industry’s best faculty at JAGSOM"
    var str4="Pursue one of the top domain-oriented specializations: Digital Marketing, Operations, Business Analysis"
    var str5="Marketing, economics, accounting, HR and strategy for solving real-life business problems"
    var str6="Get noticed by the top hiring companies"
    
    return (
        <div className="feature-main-container">
           <div className="feature-items-wrapper">
               <h3>Top Features</h3>
               <div className="feature-elements">
                    {features(rect,str1)}
                    {features(shield,str2)}
                    {features(heart,str3)}
                    {features(star,str4)}
                    {features(hand,str5)}
                    {features(recto,str6)}

                </div>
           </div>
            
        </div>
    )
}

export default Feature
