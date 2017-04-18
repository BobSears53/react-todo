var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
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
    render: function () {
        var {todos} = this.state;

        return (
            <div>
            <TodoList todos={todos}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;