import React from 'react';
import ReactDOM from 'react-dom';
import closeIcon from "../../images/x.svg";
import imageRules from "../../images/image-rules.svg";

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
    <div style={styleCtn}>
        <div className="modal__header">
            <h1>Rules</h1>
            <button className="desktop__button" onClick={hide}>
                <img src={closeIcon} alt="Close Icon" />
            </button>
        </div>
        <img src={imageRules} alt="Game Rules" />
        <button className="mobile__button" onClick={hide}>
            <img src={closeIcon} alt="Close Icon" />
        </button>
    </div>, document.body
) : null;

export default Modal;

const styleCtn = {
    position:'absolute',
    marginLeft:'auto',
    top:210,
    backgroundColor:'white',
    paddingBottom:20,
    marginRight:'auto',
    left:0,
    right:0,
    textAlign:'center',
    width:500
}
