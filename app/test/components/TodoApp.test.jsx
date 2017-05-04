var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add New todo to existing todos state on handleAddTodo', () => {
        var todoText = 'test text';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos: []});  //initialize the array to empty
        todoApp.handleAddTodo(todoText); // add the new item as the first item in the array

        expect(todoApp.state.todos[0].text).toBe(todoText);
        // expect createdAt to be a number
        console.log('in Test createdAt is ' + todoApp.state.todos[0].createdAt);
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle completed checkbox when handleToggle called', () => {
        var todoData = {
            id: 11,
            text: 'Test features',
            completed: false,
            createdAt: 0,
            completedAt: undefined
        };

        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});  // pass the local array to ToDoApp

        // check that todos first item has a completed value of false
        expect(todoApp.state.todos[0].completed).toBe(false);

        // call handleToggle with 11
        todoApp.handleToggle(11);
        // Verify that value changed
        expect(todoApp.state.todos[0].completed).toBe(true);
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
        //Expect completedAt to be a number

    });

    it('should toggle todo checkbox from completed  to inCompleted', () => {
        var todoData = {
            id: 11,
            text: 'Test features',
            completed: true,
            createdAt: 0,
            completedAt: 125
        };

        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});  // pass the local array to ToDoApp

        // check that todos first item has a completed value of false
        expect(todoApp.state.todos[0].completed).toBe(true);

        // call handleToggle with 11
        todoApp.handleToggle(11);
        // Verify that value changed
        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.state.todos[0].completedAt).toNotExist();
        //Expect completedAt to be a number

    });

    //Test that when toggle from true to false, CompletedAt get removed
});