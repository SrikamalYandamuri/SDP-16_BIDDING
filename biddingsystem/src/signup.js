import React, { useState } from "react";
import './signup.css';
import { callApi, errorResponse } from './main';

const HS1 = { "cursor": "pointer" };
const space = { "height": "12px" };

function Signup() {
    const [currentStep, setCurrentStep] = useState(1);
    const [sharedData, setSharedData] = useState({});

    function handleNext1() {
        var RT1 = document.getElementById('RT1');
        var RT2 = document.getElementById('RT2');
        var RT3 = document.getElementById('RT3');
        RT1.style.border = "";
        RT2.style.border = "";
        RT3.style.border = "";

        if (RT1.value === "") {
            RT1.style.border = "1px solid red";
            RT1.focus();
            return;
        }
        if (RT2.value === "") {
            RT2.style.border = "1px solid red";
            RT2.focus();
            return;
        }
        if (RT3.value === "") {
            RT3.style.border = "1px solid red";
            RT3.focus();
            return;
        }
        if (RT2.value !== RT3.value) {
            alert("Password and Re-type Password must be same");
            RT2.style.border = "1px solid red";
            RT2.focus();
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(RT1.value)) {
            alert("Invalid email address format");
            RT1.style.border = "1px solid red";
            RT1.focus();
            return; // Stop the registration process if email is invalid
        }
        sharedData.emailid = RT1.value;
        sharedData.password = RT2.value;

        RT1.value = "";
        RT2.value = "";
        RT3.value = "";

        setSharedData({ ...sharedData });
        setCurrentStep(currentStep + 1);
    }

    function handleNext2() {
        var RT4 = document.getElementById('RT4');
        var RT5 = document.getElementById('RT5');
        var RT6 = document.getElementById('RT6');
        RT4.style.border = "";
        RT5.style.border = "";
        RT6.style.border = "";
        if (RT4.value === "") {
            RT4.style.border = "1px solid red";
            RT4.focus();
            return;
        }
        if (RT5.value === "") {
            RT5.style.border = "1px solid red";
            RT5.focus();
            return;
        }
        sharedData.firstname = RT4.value;
        sharedData.lastname = RT5.value;
        sharedData.gender = RT6.value;

        RT4.value = "";
        RT5.value = "";
        RT6.value = "";

        setSharedData({ ...sharedData });
        setCurrentStep(currentStep + 1);
    }

    function register() {
        var RT7 = document.getElementById('RT7');
        var RT8 = document.getElementById('RT8');
        var RT9 = document.getElementById('RT9');
        RT7.style.border = "";
        RT8.style.border = "";
        RT9.style.border = "";
        if (RT7.value === "") {
            RT7.style.border = "1px solid red";
            RT7.focus();
            return;
        }
        if (RT8.value === "") {
            RT8.style.border = "1px solid red";
            RT8.focus();
            return;
        }
        if (RT9.value === "") {
            RT9.style.border = "1px solid red";
            RT9.focus();
            return;
        }
        var url = "http://localhost:5000/register/info";
        var data = JSON.stringify({
            emailid: sharedData.emailid,
            password: sharedData.password,
            firstname: sharedData.firstname,
            lastname: sharedData.lastname,
            gender: sharedData.gender,
            number: RT7.value,
            aadharnumber: RT8.value,
            voterid: RT9.value
        });
        callApi("POST", url, data, registeredSuccess, errorResponse);
        RT7.value = "";
        RT8.value = "";
        RT9.value = "";

        window.location.replace("/login");
    }

    function registeredSuccess(res) {
        var data = JSON.parse(res);
        alert(data);
    }

    function logout() {
        window.location.replace("/");
    }


    return (
        <div className="full-height">
            <div className="signupheader"><label style={HS1} onClick={logout}>Online Bidding System</label></div>
            <div className="signupcontent"></div>
            <div className="signupbox">
                <ul id="progressbar">
                    <li className={currentStep === 1 ? "active" : ""}>Register</li>
                    <li className={currentStep === 2 ? "active" : ""}>Personal Details</li>
                    <li className={currentStep === 3 ? "active" : ""}>Bidder Details</li>
                </ul>

                <fieldset style={{ display: currentStep === 1 ? "block" : "none" }}>
                    <div style={space}></div>
                    <h2 class="fs-title">Create your account</h2>
                    <input type="text" id="RT1" name="email" placeholder="Email" />
                    <input type="password" id="RT2" name="pass" placeholder="Password" />
                    <input type="password" id="RT3" name="cpass" placeholder="Confirm Password" />
                    <input type="button" name="next" class="next action-button" onClick={handleNext1} value="Next" />
                </fieldset>
                <fieldset style={{ display: currentStep === 2 ? "block" : "none" }}>
                    <h2 class="fs-title">Personal Details</h2>
                    <input type="text" id="RT4" name="fname" placeholder="First Name" />
                    <input type="text" id="RT5" name="lname" placeholder="Last Name" />
                    <select id="RT6" name="Gender">
                        <option value="" disabled selected>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <input type="button" class="next action-button" onClick={handleNext2} value="Next" />
                </fieldset>
                <fieldset style={{ display: currentStep === 3 ? "block" : "none" }}>
                    <h2 class="fs-title">Bidder Details</h2>
                    <input type="text" id="RT7" placeholder="Contact Number" />
                    <input type="text" id="RT8" placeholder="Aadhar Number" />
                    <input type="text" id="RT9" placeholder="Bidder Id" />
                    <input type="button" className="next action-button" onClick={() => register(sharedData)} value="Submit" />
                </fieldset>
            </div>
            <div className="loginfooter">@Online Bidding System</div>
        </div>
    );
}
export default Signup;
