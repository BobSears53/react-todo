export var setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
};

//  toggleShowCompleted TOOGLE_SHOW_COMPLETED
export var toggleShowCompleted = () => {
    return {
        type: 'TOOGLE_SHOW_COMPLETED'
    };
};

export var addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
    };
};

// toogleTodo(id) TOOGLE_TODO

export var toogleTodo = (id) => {
    return {
        type: 'TOOGLE_TODO',
        id
    };
};