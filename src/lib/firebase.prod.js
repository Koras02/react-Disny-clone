import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyBxyTR5TvM884e7zA7zfo3pC7uk3NnBaJY",
    authDomain: "disny-firebase.firebaseapp.com",
    projectId: "disny-firebase",
    storageBucket: "disny-firebase.appspot.com",
    messagingSenderId: "195019150209",
    appId: "1:195019150209:web:5fca749a98760f4bfe8e80",
    measurementId: "G-6GLTS9V90X"

}

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;