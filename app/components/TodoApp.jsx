var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
          showCompleted: false,
          searchText: '',
          todos: [
              {
                id: uuid(),
                text:  'Walk the cat'
              }, {
                id: uuid(),
                text: 'Clean the yard'
              }, {
                id: uuid(),
                text: 'Change CRV oil'
              }, {
                id: uuid(),
                text: 'Rake the lawn'
              }
          ]
        };
    },
    handleAddTodo: function (text) {  // WE send this as a Prop to AddTodo
        // alert('new todo:' + text);
        this.setState({
            todos: [                    // add to the existing array todos
                ...this.state.todos ,
                {
                    id: uuid(),  // add the new item
                    text: text
                }
            ]
        });
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