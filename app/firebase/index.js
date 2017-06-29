import firebase from 'firebase';

try {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyA5HvAOsv0ySHrDHU3CnjH5vq1Uq8B8DJc",
        authDomain: "sears-todo-app.firebaseapp.com",
        databaseURL: "https://sears-todo-app.firebaseio.com",
        projectId: "sears-todo-app",
        storageBucket: "sears-todo-app.appspot.com",
        messagingSenderId: "484566208068"
    };

    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;