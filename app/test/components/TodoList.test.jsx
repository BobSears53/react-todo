var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList'
import ConnectedTodo, {Todo} from 'Todo';


describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('it should render on todo component for each todo item', () => {
        var todos = [{
            id: 1,
            text: 'Do something',
            completed: false,
            completedAt: undefined,
            createdAt:500
        }, {
            id: 2,
            text: 'Check email',
            completed: false,
            completedAt: undefined,
            createdAt:500
        }];
        var store = configure({
            todos: todos
        });
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        );

        var todoList = TestUtils.scryRenderedComponentsWithType(provider,ConnectedTodoList)[0];
        var todosCompnoents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo); //passes array & classname of rendering function

        expect(todosCompnoents.length).toBe(todos.length);
    });

    it('it should render empty message if no todos', () => {
        var todos = [];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);
    });
});