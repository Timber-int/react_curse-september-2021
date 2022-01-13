import React from 'react';

import Address from "../address/Address";
import Company from "../company/Company";
import "./UserDetails.css";

const UserDetails = (
    {
        userDetails: {
            id,
            name,
            username,
            email,
            address,
            phone,
            website,
            company
        },
        getUserPostsDetails,
    }) => {

    return (
        // <div className="user-wrapper">
            <div className="user_details-box">
                <div style={{border: '1px solid black', margin:'5px'}}>
                    <div>Id: {id}</div>
                    <div>Name: {name}</div>
                    <div>User name: {username}</div>
                    <div>Email: {email}</div>
                    <div>Address:
                        {
                            <Address address={address}/>
                        }
                    </div>
                    <div>Phone: {phone}</div>
                    <div>Website: {website}</div>
                    <div>Company:
                        {
                            <Company company={company}/>
                        }
                    </div>
                    <button className="details_button" onClick={() => getUserPostsDetails(id)}>Get posts of user</button>
                </div>
            </div>
        // </div>
    );
};

export default UserDetails;