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
    console.log('In showCompletedReducer type id is: ' + action.type);
  switch (action.type) {
      case 'TOGGLE_SHOW_COMPLETED':
          return  !state;
      default:
          return state;
  }
};

export var todosReducer = (state = [], action) => {
    console.log('In todoReducer type id is: ' + action.type);
    switch (action.type) {
        case 'ADD_TODO':
            console.log('In ADD_TODO case ');
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
            console.log('In TOGGLE_TODO case ');
            return state.map((todo) => {
                console.log('Issue id is' + todo.id);
                if (todo.id === action.id) {
                    var nextCompleted = !todo.completed;
                    console.log('Todo Found');
                    return {
                        ...todo,
                        completed: nextCompleted,
                        completedAt: nextCompleted ? moment().unix() : undefined
                    };
                }
            });
        default:
            console.log('Feel to Default');
            return state;
    }
};