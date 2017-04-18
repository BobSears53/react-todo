var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
          showCompleted: false,
          searchText: '',
          todos: [
              {
                id: 1,
                text:  'Walk the cat'
              }, {
                id: 2,
                text: 'Clean the yard'
              }, {
                id: 3,
                text: 'Change CRV oil'
              }, {
                id: 4,
                text: 'Rake the lawn'
              }
          ]
        };
    },
    handleAddTodo: function (text) {  // WE send this as a Prop to AddTodo
        alert('new todo:' + text);
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState ({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function () {
        var {todos} = this.state;

        return (
            <div>
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={todos}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;