import React from "react";
import Scorebox from "./Scorebox";
<<<<<<< HEAD
import {firestore} from "../firebase/firebase";
import Modal from 'react-modal';
=======
import Logout from "./Auth/Logout"
>>>>>>> 56bacf01653e75da45c79046ac4728a8d2157252

function Header(props) {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [history,setHistory] = React.useState({});

    const saveHistory = () => {
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;
        let db = firestore.doc(`History/History`);
        db.update({
                time:dateTime,
                score:props.score
        }).then(
            alert('Saved')
        )
    }

    const getData = () => {
        let db = firestore.doc(`History/History`);
        db.get().then((snapshot) => {
            if (snapshot.exists) {
                let data = snapshot.data();
                setHistory(data)
            }
        }).then(
            openModal
        )
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    return (
        <header>
            <h1 className="header__title">
                <span>Rock</span>
                <span>Paper</span>
                <span>Scissors</span>
            </h1>
<<<<<<< HEAD
            <Scorebox score={props.score}/>
            <button onClick={() => saveHistory()} style={{backgroundColor:'white'}}>
                Save History
            </button>
            <button onClick={() => getData()} style={{backgroundColor:'white'}}>
                Show Latest History
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>close</button>
                <div style={{backgroundColor:'red'}}>Score: {history?.score}</div>
                <div style={{backgroundColor:'red'}}>Time : {history?.time}</div>
            </Modal>
=======
            <Scorebox score={props.score} saveScore={props.saveScore}/>
            <div>
            {props.email}
            <br />
            <Logout handleLogout={props.handleLogout} email={props.email} rank={props.rank} scoreMax={props.scoreMax}/>
            </div>
>>>>>>> 56bacf01653e75da45c79046ac4728a8d2157252
        </header>
        
        
    )
}

export default Header;

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};
