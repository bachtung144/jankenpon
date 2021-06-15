import React, { useState } from "react";
import Modal from "../Modal/Rank";
import useModal from "../Modal/useModal";

function Logout(props) {

    const [showModal, setShowModal] = useState(false);
    const {isShowing, toggle} = useModal();

    function toggleModal() {
        setShowModal(!showModal);
    }

    return (
    <div className="logout-cha">
        <div className="button button-1">
            <button className="btn" onClick={toggle}>Rank</button>
        </div>
        <div className="button button-1">
            <button className="btn" onClick={props.handleLogout}>Logout</button>
        </div>
            <Modal
                isShowing={isShowing}
                hide={toggle}
                rank={props.rank}
                scoreMax={props.scoreMax}
            />
    </div>

    )
}

export default Logout;