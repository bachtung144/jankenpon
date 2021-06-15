import React, { useState } from "react";
import Modal from "./Modal/Modal";
import imageRules from '../images/image-rules.svg';
import closeIcon from "../images/x.svg"
import useModal from "./Modal/useModal";

function Footer() {

    const [showModal, setShowModal] = useState(false);
    const {isShowing, toggle} = useModal();

    function toggleModal() {
        setShowModal(!showModal);
    }

    return (
        <div>
            <footer>
                <button className="btn10" onClick={toggle}>Rules</button>
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
