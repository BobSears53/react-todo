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
    });
});