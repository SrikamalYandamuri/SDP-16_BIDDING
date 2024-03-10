import React from "react";
import './webpage.css';

const HS1 = {"float" : "right" , "padding-right" : "30px" , "cursor" : "pointer"};
const HS2 = {"font-size" : "38px" , "font-weight" : "500" ,"margin-top" : "35px", "line-height ": "100px" ,"text-align": "center" ,"font-family": "poppins"};
const space = {height : "10px"};

class frontpage extends React.Component
{

    signup()
    {
        window.location.replace("/signup"); 
    }

    login()
    {
        window.location.replace("/login");
    }

    render()
    {

    return(
        <div className="full-height">
            <div className="webpage-header">Online Bidding System
                <label style={HS1} onClick={this.signup}>Sign Up</label>
                <label style={HS1} onClick={this.login}>Login</label>
            </div>
            <div className="webpage-content">Welcome to Online Bidding System</div>
            <div className="about">About</div>
                <div className="webpage-box">
                    <div style={HS2}>What is an Online Bidding System?</div>
                    <p>Implement robust security measures to safeguard bid-related information, including encryption, access controls, and secure data storage. Protect sensitive data such as pricing, technical specifications, and proprietary information from unauthorized access, disclosure, or tampering.</p>
                </div>
                <div style={space}></div>
                <div style={space}></div>
                <div style={space}></div>
                <h2>Cost Savings and Efficiency</h2>
                <p1> Develop a list of pre-qualified vendors based on their capabilities, experience, financial stability, and reputation. Limiting the number of vendors invited to bid streamlines the evaluation process and ensures that only qualified suppliers participate.</p1>
                <h2>Bidding  Accessibility</h2>
                <p1>Provide clear and concise information about bidding opportunities, including eligibility criteria, requirements, deadlines, and submission instructions. Make bid documents available in accessible formats, such as plain text or accessible PDFs, to accommodate individuals with disabilities.</p1>
                <h2>Auditability and Verifiability</h2>
                <p1>Establish clear and well-documented procedures for conducting the bidding process, including requirements for bid documentation, evaluation criteria, and decision-making protocols. Ensure that these procedures are followed consistently and can be easily reviewed by auditors.</p1>

                <div className="webpage-footer">@Online Bidding System</div>
        </div>
    );
    }
}
export default frontpage;