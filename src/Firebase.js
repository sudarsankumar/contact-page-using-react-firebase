import firebase from 'firebase'
var firebaseApp = firebase.initializeApp({
    // enter your firebase credentials
})
var db = firebaseApp.firestore()
export { db }