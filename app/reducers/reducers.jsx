var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT':
            return action.searchText;
        default:
            return state;
    };
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
      case 'TOGGLE_SHOW_COMPLETED':
          return  !state;
      default:
          return state;
  }
};

export var todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return  [
                ...state,
                {
                    id: uuid(),  // add the new item
                    text: action.text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ];

        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    var nextCompleted = !todo.completed;
                    console.log('Todo Found');
                    return {
                        ...todo,
                        completed: nextCompleted,
                        completedAt: nextCompleted ? moment().unix() : undefined
                    };
                } else {
                    return todo;
                }
            });
        case 'ADD_TODOS':
            return [
                ...state,
                ...action.todos
            ];
        default:
            console.log('Feel to Default');
            return state;
    }
};