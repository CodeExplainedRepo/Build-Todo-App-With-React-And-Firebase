import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    // paste your firebase config here
}

firebase.initializeApp(firebaseConfig)

export default firebase