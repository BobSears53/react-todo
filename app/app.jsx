var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');


var actions = require('actions');
var store = require('configureStore').configure();
import firebase from 'app/firebase';
import router from 'app/router';

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(actions.login(user.uid));
        store.dispatch(actions.startAddTodos());
        hashHistory.push('/todos');
        console.log('UID after dispatch startAddTodos is:', uid);
    } else {
        store.dispatch(actions.logout());
        hashHistory.push('/');
    }
});

// import  './../playground/firebase/index';  use when in playground



// Load foundation
$(document).foundation();

//App Css
require('style!css!sass!applicationStyles')



ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
  document.getElementById('app')
);
