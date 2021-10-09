import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const Faq = () => {
    var detailDictionary={ 'h3':"When will I have access to the lectures and assignments?", 'p':"Complete the course to acquire this prestigious certification from reputed research centres. You can share your course certificates in the Certifications section of your LinkedIn profile, on printed resumes, CVs, or other documents."  };

    const [toggle,setToggle]=useState(false);
    const [toggle2,setToggle2]=useState(false);
    const [toggle3,setToggle3]=useState(false);
    const [toggle4,setToggle4]=useState(false);

    function content(para,t){
        if(t){
            return(
                <p className="quedisplay">{para}</p>
                )

        }
        
    }

    function question(detail,t,st){
   
        return(
            <div className="faq-content">
                <button className={!t?'click-faq':'click-faq-after'} onClick={() => st(!t)}>
                    <div className="faq-que">
                        <h3>{detail['h3']}</h3>
                    </div>
                    <div className="arrowangle-icon"><FontAwesomeIcon  icon={faAngleRight}/></div>
                </button>
    
                    {content(detail['p'],t)}
            </div>
        )
    }


  

   
    return (
        <div className="faq-container">
            <h3>FAQs</h3>
            <p>Frequently asked questions</p>
            {question(detailDictionary, toggle,setToggle)}
            {question(detailDictionary,toggle2,setToggle2)}
            {question(detailDictionary,toggle3,setToggle3)}
            {question(detailDictionary,toggle4,setToggle4)}
            <div className="dwnld-btn-div"><button className="dwnld-btn">Download Brochure</button></div>

        </div>
    )
}

export default Faq
