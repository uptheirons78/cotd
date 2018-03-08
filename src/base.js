import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA8sUmGHCJ1pvWq_5dNnDkK-YYEs_oNH3Q",
    authDomain: "catch-of-the-day-uptheirons78.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-uptheirons78.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }; //a named export

export default base;