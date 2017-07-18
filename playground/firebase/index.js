import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: process.env.AP_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL:process.env.DATABASE_URL,
    storageBucket:process.env.STORAGE_BUCKET
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    appInfo: {
        appName: 'Todo App',
        appVersion: '1.0'
    },
    isRunning: true,
    user: {
        name: 'Bob',
        age:64
    }
});

// firebaseRef.update({
//     'user/name': 'Macaela',
//     'appInfo/appName': 'Todo Application USA'
// });
//

// firebaseRef.child('appInfo').update({
//     appName: 'Bobs Todo App'
// });
// firebaseRef.child('user').update({
//     name: 'Robert'
// });

// firebaseRef.child('appInfo/appName').remove();

// firebaseRef.child('appInfo').update({
//     appVersion: '2.0',
//     appName: null
// });


// firebaseRef.update({
//     'isRunning': null
// });
//
// firebaseRef.child('user/age').remove();


// firebaseRef.child('appInfo').once('value').then((snapshot) => {
//     console.log('Got entire database', snapshot.key,snapshot.val());
// }, (e) => {
//  console.log('Unable to fetch value', e);
// });

// firebaseRef.on('value', (snapshot) => {
//     console.log('Got Value', snapshot.val());
// });

// firebaseRef.off();
//
// firebaseRef.update({isRunning: false});

// firebaseRef.child('user').once('value').then((snapshot) => {
//     console.log('Got user', snapshot.key, snapshot.val());
// }, (e) => {
//  console.log('Unable to fetch value', e);
// });

// firebaseRef.child('user').on('value', (snapshot) => {
//     console.log('User ref changed', snapshot.val());
// });
//
// firebaseRef.child('user').update({
//     name: 'Robert'
// });
//
// firebaseRef.child('appInfo').update({
//     appName: 'Bobs Todo App'
// });

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//     console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//     console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//     console.log('child_removed', snapshot.key, snapshot.val());
// });

// var newNoteRef = notesRef.push();
// newNoteRef.set({
//    text: 'Walk the dog'
// });
// var newNoteRef = notesRef.push({
//    text: 'Walk the dogs!'
// });
//
// console.log('Todo ID', newNoteRef.key);

var todosRef = firebaseRef.child('Todos');

todosRef.on('child_added', (snapshot) => {
    console.log('New Todo added', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'My Todo X!'
});

console.log('Todo ID', todosRef.key);

todosRef.push({
    text: 'My Todo 2!'
});

console.log('Todo ID', todosRef.key);

