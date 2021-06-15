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
            <Scorebox score={props.score} saveScore={props.saveScore}/>
            <div>
            {props.email}
            <br />
            <Logout handleLogout={props.handleLogout} email={props.email} rank={props.rank} scoreMax={props.scoreMax}/>
            </div>
        </header>
        
        
    )
}

export default Header;