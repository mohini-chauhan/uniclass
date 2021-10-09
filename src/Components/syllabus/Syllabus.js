import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp,faAngleDown,faCircle} from "@fortawesome/free-solid-svg-icons";
import{useState} from "react";



const Syllabus = () => {

    var detailDictionary={'month':'aug', 'date':9, 'h3':"Welcome Class for Full Stack Java Developer", 'lesson':1,'duration':"1h 20m",'p':"Get started with the Post Graduate Diploma in Management with JAGSOM and Simplilearn.  Explore everythingabout this eclectic program and kickstart your management journey with foundation courses before taking a deepdive into the specialization of your choice."  };
    const [toggle,setToggle]=useState(false);
    const [toggle2,setToggle2]=useState(false);
    const [toggle3,setToggle3]=useState(false);
    const [toggle4,setToggle4]=useState(false);
    const [toggle5,setToggle5]=useState(false);
    const [toggle6,setToggle6]=useState(false);
    function content(para,t){
        if(t){
            return(
                <p className="clickDisplay">{para}</p>
                )

        }
        
    }

    function dateTile(detail,t,st){
   
        return(
            <div className="syllabus-contents">
                <button onClick={() => st(!t)}>
                    <div className="date-tile"><p className="month">{detail['month']}</p><p className="date">{detail['date']}</p></div>
                    <div className="circle-syll"></div>
                    <div className="syll-index">
                        <h3>{detail['h3']}</h3>
                        <p>lessons {detail['lesson']} <span><FontAwesomeIcon  icon={faCircle}/></span>{detail['duration']}</p>
                    </div>
                    <div className="arrow-icon"><FontAwesomeIcon  icon={t?faAngleUp:faAngleDown}/></div>
                </button>
    
                    {content(detail['p'],t)}
            </div>
        )
    }


  

    return (
        <div className="syllabus-container">
            <h3>Syllabus</h3>
            <p>What you will learn from this course </p>
            {dateTile(detailDictionary,toggle,setToggle)}
            {dateTile(detailDictionary,toggle2,setToggle2)}
            {dateTile(detailDictionary,toggle3,setToggle3)}
            {dateTile(detailDictionary,toggle4,setToggle4)}
            {dateTile(detailDictionary,toggle5,setToggle5)}
            {dateTile(detailDictionary,toggle6,setToggle6)}
            <div className="dwnld-btn-div"><button className="dwnld-btn">Download Brochure</button></div>
            
            
        </div>
    )
}

export default Syllabus

