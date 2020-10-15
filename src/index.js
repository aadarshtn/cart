import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBSrRmBfxSUBkGlETSNAF6W0IkBy3fallU",
  authDomain: "cart-dccb4.firebaseapp.com",
  databaseURL: "https://cart-dccb4.firebaseio.com",
  projectId: "cart-dccb4",
  storageBucket: "cart-dccb4.appspot.com",
  messagingSenderId: "148950184511",
  appId: "1:148950184511:web:dd987d9ca00a629d1f7e8a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
