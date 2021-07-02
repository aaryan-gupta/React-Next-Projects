import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_API_KEY",
    projectId: "YOUR_API_KEY",
    storageBucket: "YOUR_API_KEY",
    messagingSenderId: "YOUR_API_KEY",
    appId: "YOUR_API_KEY",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }