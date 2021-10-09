import React from 'react'
import logoImg from "./logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter,faInstagram ,faFacebookF,faLinkedinIn,faYoutube} from '@fortawesome/free-brands-svg-icons';

const Demo = () => {
    return (
        <div className="demo-container">
            <div className="journey-container">
                <div className="journey-items">Begin your journey of upscaling yourself.</div>
                <div className="demo-btn"><button>Book a free demo class</button></div>
            </div>
            <div className="footer-grid">
                <h3>About us</h3>
                <ul>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Colleges</a></li>
                    <li><a href="#">Corporates</a></li>
                    <li><a href="#">How it works</a></li>
                    <li><a href="#">Hire Developers</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Become a mentor</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>
            <div className="footer-grid">
                <h3>Policies</h3>
                <ul>
                    <li><a href="#">Refund Policy </a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                </ul>
            </div>
            <hr/>
            <div className="footer-grid">
                <h3>All courses</h3>
                <div className="course-list-container">
                    
                        <div className="course-list"><a href="#">Data Science with Python</a></div>
                        <div className="course-list"><a href="#">Full Stack Java Developer with ReactJS</a></div>
                        <div className="course-list"><a href="#">Full Stack Web Developer - MEAN Stack</a></div>
                        <div className="course-list"><a href="#">Machine Learning with Python Course</a></div>
                        <div className="course-list"><a href="#">Python Certification Course</a></div>
                        <div className="course-list"><a href="#">AWS Developer Associate Certification</a></div>
                </div>               
            </div>
            <div className="footer-content-container">
                <div className="footer-contents">
                    <div className="contact-container">
                        <img src={logoImg} alt="logo"/>
                        <div className="social-container">
                            <div className="social-icon"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></div>
                            <div className="social-icon"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></div>
                            <div className="social-icon"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></div>
                            <div className="social-icon"><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></div>
                            <div className="social-icon"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></div>


                        </div>
                        


                    </div>
                    <div className="digital-container">
                    <div className="digital">
                        <div className="social-icon"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></div>
                        <div className="email-supt" ><span>support@codeshastra.com</span></div>
                        
                    </div >
                    <div className="copyright"><p>@copyright Code Shastra Pvt Ltd</p></div>
                    </div>
                    

                </div>

            </div>
            
        </div>
    )
}

export default Demo
