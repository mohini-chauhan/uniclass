import React from 'react'
import phn from "./ringingphn.svg";
const AboutContent = () => {
    return (
        
            <div className="abt-content-container">
                    <h1>About this Course</h1>
                    
                    <div className="content-container">
                        <div className="abt-content">
                            <p>In this course you will engage in a series of challenges designed to increase your own happiness and build more productive habits. As preparation for these tasks, Professor Laurie Santos reveals misconceptions about happiness, annoying features of the mind that lead us to think the way we do, and the research that can help us change. You will ultimately be prepared to successfully incorporate a specific wellness activity into your life.</p>
                            <p>In this course you will engage in a series of challenges designed to increase your own happiness and build more productive habits. As preparation for these tasks, Professor Laurie Santos reveals misconceptions about happiness, annoying features of the mind that lead us to think the way we do, and the research that can help us change. You will ultimately be prepared to successfully incorporate a specific wellness activity into your life.</p>
                            <p>In this course you will engage in a series of challenges designed to increase your own happiness and build more productive habits. As preparation for these tasks, Professor</p>
                            <p>In this course you will engage in a series of challenges designed to increase your own happiness and build more productive habits. As preparation for these tasks, Professor Laurie Santos reveals misconceptions about happiness, annoying features of the mind that lead us to think the way we do, and the research that can help us change. You will ultimately be prepared to successfully incorporate a specific wellness activity into your life.</p>

                        </div>
                        <div className="abt-form-container">
                            <div className="phn">
                                <img src={phn} alt="phn-details"/><span>(+91)9344123569</span>

                            </div>
                            <div className="form">
                                <h3>Request more information</h3>
                                <form>
                                    <label>Full Name</label>
                                    <input type="text" name="name"></input>
                                    <label>Email</label>
                                    <input type="text" name="email"></input>
                                    <label>Mobile number</label>
                                    <input type="tel" name="contact"></input>
                                    <label>Message</label>
                                    <textarea type="text" name="message"></textarea>
                                    <button className="submit-btn">Submit</button>
                                </form>

                            </div>
                        </div>

                    </div>


                </div>
        
    )
}

export default AboutContent
