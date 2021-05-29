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
                <button onClick={toggle}>Rules</button>
                <p className="footer__message">Made by team 7</p>
            </footer>
            {/*{ showModal? (*/}
            {/*    <Modal>*/}
            {/*        <div className="modal__header">*/}
            {/*            <h1>Rules</h1>*/}
            {/*            <button className="desktop__button" onClick={toggleModal}>*/}
            {/*                <img src={closeIcon} alt="Close Icon" />*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*        <img src={imageRules} alt="Game Rules" />*/}
            {/*        <button className="mobile__button" onClick={toggleModal}>*/}
            {/*                <img src={closeIcon} alt="Close Icon" />*/}
            {/*        </button>*/}
            {/*    </Modal>*/}
            {/*) : null }*/}
            <Modal
                isShowing={isShowing}
                hide={toggle}
            />
        </div>
    )
}

export default Footer;
