
var requireLogin = (nextState, replace, next) => {
    if (!firebase.auth().currentUser) {
        replace('/');
    }
    next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
    if (firebase.auth().currentUser) {
        replace('/todos');
    }
    next();
};

export default (
    <Router history={hashHistory}>
        <Route path="/">
            <Route path="todos" component={TodoApp} onEnter={requireLogin} /> //onEnter={requireLogin}
            <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
        </Route>
    </Router>
);