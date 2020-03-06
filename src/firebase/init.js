import firebase from 'firebase'
// import firebase from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
       apiKey: "AIzaSyC30oUMjghOD-x9uv8QkN49bgvYsyHKDlU",
       authDomain: "smoothie-project-e787d.firebaseapp.com",
       databaseURL: "https://smoothie-project-e787d.firebaseio.com",
       projectId: "smoothie-project-e787d",
       storageBucket: "smoothie-project-e787d.appspot.com",
       messagingSenderId: "712539319085",
       appId: "1:712539319085:web:bd2fd753852699f11b41a4",
       measurementId: "G-CLC5T13DER"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

// export firestore db
export default firebaseApp.firestore()