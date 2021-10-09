import React from "react";
import calendar from "./calendar.svg";
import timer from "./timer.svg";
import certificate from "./certificate.svg";
import online from "./online.svg";
function skillDisplay(image,detail){
    return(
        <div className="skill-tiles-container">
            <div className="Skill-icon">
                <img src={image} alt="skill-icon"/>
            </div>
            <div className="skill-content">
                <h3>{detail['h3']}</h3>
                <p>{detail['p']}</p>

            </div>


        </div>
    )
}

const Skills = () => {
    var str1={'h3':"Flexible Deadlines",'p':"Reset deadlines in accordance to your schedule"};
    var str2={'h3':"Shareable Certificate",'p':"Earn a Certificate upon completion"};
    var str3={'h3':"100% online",'p':"Start instantly and learn at your own schedule"};
    var str4={'h3':"Approx. 19 hours to complete",'p':""};
    return (
        <div className="skill-main-container">
            <h2>Skills you will gain</h2>
            {skillDisplay(calendar,str1)}
            {skillDisplay(certificate,str2)}
            {skillDisplay(online,str3)}
            {skillDisplay(timer,str4)}
            
        </div>
    )
}

export default Skills
