import React from 'react';
import {callApi, errorResponse, getSession} from './main';
import './myprofile.css';

export function userInfo()
{
    var url = "http://localhost:5000/myprofile/userinfo";
    var data = JSON.stringify({
        emailid : getSession("sid")
    });
    callApi("POST", url, data, userData, errorResponse);
}

export function userData(res)
{
    var data = JSON.parse(res);
    var L1 = document.getElementById("L1");
    var L2 = document.getElementById("L2");
    var L3 = document.getElementById("L3");
    var L4 = document.getElementById("L4");
    //L1.innerText = data[0].firstname;
    L1.innerHTML = `<b style='color:red'>${data[0].firstname}</b>`;
    L2.innerText = data[0].lastname;
    L3.innerText = data[0].contactno;
    L4.innerText = data[0].emailid;
}

class MyProfile extends React.Component
{
    constructor()
    {
        super();
        this.sid = getSession("sid");
        if(this.sid === "")
            window.location.replace("/");

        userInfo();
    }

    render()
    {
        return(
            <div className='fullheight'>
                <table className='tablestyle'>
                    <tr>
                        <td colSpan={2}><h3>User Information</h3></td>
                    </tr>
                    <tr>
                        <td className='firstcolumn'>First Name</td>
                        <td><label id='L1'></label></td>
                    </tr>
                    <tr>
                        <td className='firstcolumn'>Last Name</td>
                        <td><label id='L2'></label></td>
                    </tr>
                    <tr>
                        <td className='firstcolumn'>Contact No.</td>
                        <td><label id='L3'></label></td>
                    </tr>
                    <tr>
                        <td className='firstcolumn'>Email ID</td>
                        <td><label id='L4'></label></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default MyProfile;