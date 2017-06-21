var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();


store.subscribe(() => {
    console.log('New state', store.getState());
});
//


// Load foundation
// store.dispatch(actions.addTodo('Clean the yard'));
// store.dispatch(actions.setSearchText('yard'));
// store.dispatch(actions.toggleShowCompleted());
//require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App Css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>

    </Provider>,
  document.getElementById('app')
);
