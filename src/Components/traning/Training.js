import React from 'react';
import pipe from "./pipe.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
function online(date,daysName,days,time){
    var x=date.split(" ");
    return(
        <div className="table-container">
            <table>
                <tr>
                    <td><div className="bg-sq" ><p className="month">{x[0]}</p><p className="date">{x[1]}</p></div></td>
                    <td><p className="daysName">{daysName}</p><p className="days">({days})</p></td>
                    <td className="pipe"><img src={pipe} alt=""/></td>
                    <td><p className="timing">Timing</p><p className="time">{time}</p></td>
                </tr>
            </table>

        </div>
    )
}
function card(expiryDate){
    return(
        <div className="price-card">
            <div className="price-card-head">
                <h3>Course Price At</h3>
                    <div className="price-desc">
                        <div class="price-course-drop">
                            <h2>₹15000 </h2><span>₹30000</span>
                        </div>
                    </div>
                    <p>10% Off Expire In</p>
                    <div className="offer-expiry">
                        <span>78 <small>d</small></span>
                        <span>78 <small>h</small></span>
                        <span>78 <small>m</small></span>
                        <span>78 <small>s</small></span>
                    </div>
                    <div className="Buy-now">
                        <button>Buy Now</button>
                    </div>
                    <div className="EMI">
                        <button><FontAwesomeIcon  className="icon" icon={faInfoCircle}/><span>No Cost EMI Starts at ₹1,699</span></button>
                    </div>
            </div>
        </div>
    )
    
}
const Training = () => {
    return (
        <div className="Training-container" >
            <div className="training-head">
                <h2>Instructor-led DevOps Training live online classes</h2>
            </div>
            <div className="training-wrapper">
                <div className="schedule">
                    { online("Aug 09","Monday-Friday","18 days","08:30pm to 10:30pm (IST)")}
                    { online("Aug 09","Monday-Friday","18 days","08:30pm to 10:30pm (IST)")}
                    { online("Aug 09","Monday-Friday","18 days","08:30pm to 10:30pm (IST)")}
                    { online("Aug 09","Monday-Friday","18 days","08:30pm to 10:30pm (IST)")}
                    { online("Aug 09","Monday-Friday","18 days","08:30pm to 10:30pm (IST)")}
                </div>
                {card(5)}
                   


            </div>
        </div>
        
    )
}
export default Training
