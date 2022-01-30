import React from "react";

const User = ({user: {id, name, username, email}}) => {
    return (
        <div>
            <div>{id}) {name} {username};</div>
            <div>Email: {email};</div>
            <hr/>
        </div>
    );
};

export {User};