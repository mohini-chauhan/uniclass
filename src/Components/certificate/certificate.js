import React from "react";
import certificate from "./certificate.svg";

const Certificate = () => {
    return (
        <div className="certificate-container">
            
            <h3>Enrollment certificates</h3>
            <div className="certificate-content">
                <p>Complete the course to acquire this prestigious certification from reputed research centres. You can share your course certificates in the Certifications section of your LinkedIn profile, on printed resumes, CVs, or other documents.</p>
            </div>
            <div className="certificate-img">
                <img src={certificate} alt="cetificate"/>
            </div>
            
            
        </div>
    )
}

export default Certificate
