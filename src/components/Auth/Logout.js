import React from "react";

function Logout(props) {
    return (
    <div>
        <div className="logout">
            <button >History</button>
        </div>
        <div className="logout">
            <button onClick={props.handleLogout}>Logout</button>
        </div>

    </div>
        
        
        
    )
}

export default Logout;