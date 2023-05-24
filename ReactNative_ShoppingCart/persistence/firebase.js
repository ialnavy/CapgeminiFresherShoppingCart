// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import '@firebase/auth';
import '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    /* TODO: RELLENAR CON LOS DATOS DE TU DB */

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fbDB = {
     app: app,
     collections: {
         users: () => { return collection(getFirestore(app), "users"); }
     }
 };

export default fbDB;
