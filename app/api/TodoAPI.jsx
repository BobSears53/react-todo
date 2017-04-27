var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
        localStorage.setItem('todos', JSON.stringify(todos));
        return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
       todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos : [];
  },
    filterTodos: function (todos, showCompleted, searchText) {
      var filteredTodos = todos;

      //Filter by showCompleted
      filteredTodos  = filteredTodos.filter((todo) => {
          return !todo.completed  || showCompleted;  //if completed status is false it will return true and this item will stay int the array
      });

      //Filter by searchText
        filteredTodos  = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });

      // Sort todos with non-completed first
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {  // if false and true
                return -1;  // a should come before b
            } else if (a.completed && !b.completed ){ // if true and false
                return 1; // a should sort after b
            } else {
                return 0;  // both are equal
            }
        });

      return filteredTodos;
    }
};