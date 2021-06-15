import React, { useEffect, useState } from 'react';
import fire from '../fire';
import ReactDOM from 'react-dom';
import closeIcon from "../../images/x.svg";
import imageRules from "../../images/image-rules.svg";

let i =0;
const Modal = ({ isShowing, hide, rank, scoreMax }) => isShowing ? ReactDOM.createPortal(
    <div style={styleCtn}>
        <div className="modal__header">
            <h1>Rules</h1>
            <button className="desktop__button" onClick={hide}>
                <img src={closeIcon} alt="Close Icon" />
            </button>
        </div>
        <div class="container">
        <h2>Top Score</h2>
        <h5>Best Your Score: {scoreMax}</h5>
        <ul class="responsive-table">
        <li class="table-header">
          <div class="col col-1">Rank</div>
          <div class="col col-2">Email</div>
          <div class="col col-3">Score</div>
        </li>
        {rank.map(score => {
            return(
            <li class="table-row">
              <div class="col col-1" data-label="Job Id">{score.id+1}</div>
              <div class="col col-2" data-label="Customer Name">{score.Email}</div>
              
              <div class="col col-3" data-label="Amount">{score.Score}</div>
            </li>
            )
        })}
        
        
        </ul>
        </div>
    </div>, document.body
) : null;

export default Modal;

const styleCtn = {
    position:'absolute',
    marginLeft:'auto',
    top:20,
    backgroundColor:'white',
    paddingBottom:20,
    marginRight:'auto',
    left:0,
    right:0,
    textAlign:'center',
    width:700
}
