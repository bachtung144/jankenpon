import React from "react";
import Modal from "./Modal/Modal";
import useModal from "./Modal/useModal";

function Footer() {

    const {isShowing, toggle} = useModal();
    return (
        <div>
            <footer>
                <button className="btn10" onClick={toggle}>Rules</button>
                <button onClick={toggle}>Rules</button>
                <p className="footer__message">Made by team 1</p>
            </footer>
            <Modal
                isShowing={isShowing}
                hide={toggle}
            />
        </div>
    )
}

export default Footer;
