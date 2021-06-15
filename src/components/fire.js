import firebase from 'firebase';


var firebaseConfig = {
apiKey: "AIzaSyCqHXs_BWLLsdF2oee1hsuayMea_xhShIc",
authDomain: "react-project-jp-itss1.firebaseapp.com",
projectId: "react-project-jp-itss1",
storageBucket: "react-project-jp-itss1.appspot.com",
messagingSenderId: "1084782934935",
appId: "1:1084782934935:web:6b0ee6c80caf8785c462d2",
measurementId: "G-727H7BGET2"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;