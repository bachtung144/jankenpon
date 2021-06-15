import React from "react";

function Logout(props) {
    return (
    <div>
        <div className="button button-1">
            <button className="btn">Rank</button>
        </div>
        <br/>
        <div className="button button-1">
            <button className="btn" onClick={props.handleLogout}>Logout</button>
        </div>

    </div>
    )
}

export default Logout;