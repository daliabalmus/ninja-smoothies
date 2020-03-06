import firebase from 'firebase'
// import firebase from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyAiMQMnQrsJxkdEC-zucNgXgHdtJKGSGcY",
authDomain: "smoothies-57b8b.firebaseapp.com",
databaseURL: "https://smoothies-57b8b.firebaseio.com",
projectId: "smoothies-57b8b",
storageBucket: "smoothies-57b8b.appspot.com",
messagingSenderId: "1062948368492",
appId: "1:1062948368492:web:7e3569dc04e580429b2849",
measurementId: "G-91XM7KHT37"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

// export firestore db
export default firebaseApp.firestore()