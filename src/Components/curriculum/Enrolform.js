import React from 'react'
import enroll from "./enroll.PNG";

const Enrolform = () => {
    return (
        <div className="enrollform container">
            <div className="enrollform-main">
                <div className="enrollform-header">
                    <h3>Like the curriculum? Enroll Now</h3>
                    <p>Structure your learning and get a certificate to prove it.</p>
                </div>
                <div className="enrollform-wrapper">
                    <form>
                        <label>Email</label>
                        <input type="email" name="email"></input>
                        <label>Mobile Number</label>
                        <input type="tel" name="mobile"></input>
                        <div className="enrollbtn-div"><button className="enrollform-btn">Submit</button></div>
                    </form>
                    <div className="bg-img">
                        <img src={enroll} alt="enroll"/>
                    </div>
                </div>
                

            </div>

            
        </div>
    )
}

export default Enrolform
