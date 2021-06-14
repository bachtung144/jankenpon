import React from "react";
import Scorebox from "./Scorebox";
import Logout from "./Auth/Logout"

function Header(props) {
    return (
        <header>
            <h1 className="header__title">
                <span>Rock</span>
                <span>Paper</span>
                <span>Scissors</span>
            </h1>
            <Scorebox score={props.score}/>
            <Logout handleLogout={props.handleLogout}/>
        </header>
        
        
    )
}

export default Header;