import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBZMPl1Huw4zI1qbqLR5m5QRMKTzIeT-40",
    authDomain: "todo-app-54dd4.firebaseapp.com",
    projectId: "todo-app-54dd4",
    storageBucket: "todo-app-54dd4.appspot.com",
    messagingSenderId: "770504022143",
    appId: "1:770504022143:web:3415b9ed582bd72e35874a"
  }

firebase.initializeApp(firebaseConfig)

export default firebase