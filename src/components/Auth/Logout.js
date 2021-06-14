import React from "react";

function Logout({handleLogout}) {
    return (
        <div className="logout">
            <button onClick={handleLogout}>Logout</button>
        </div>
        
    )
}

export default Logout;