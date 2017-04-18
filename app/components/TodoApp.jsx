var React = require('react');
var TodoList = require('TodoList');

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
    render: function () {
        var {todos} = this.state;

        return (
            <div>
            <TodoList todos={todos}/>
            </div>
        )
    }
});

module.exports = TodoApp;