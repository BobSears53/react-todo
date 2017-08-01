var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos'); // remove items from array before each test
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('filteredTodos', () => {
        var todos = [{
            id: 1,
            text: 'Some text here',
            completed: true
        }, {
            id: 2,
            text: 'Other text here',
            completed: false
        }, {
            id: 3,
            text: 'Some text here',
            completed: true
        }];

        it('should reurn all items if shoCompleted is true', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should reurn only items when shoCompleted is false', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });

        it('should sort items by completed status', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should filter todos by search text', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
            expect(filteredTodos.length).toBe(2);
        });
        it('should filter todos by search text if upper case', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'Some');
            expect(filteredTodos.length).toBe(2);
        });

        it('should reurn all todos if search text is empty', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
    });
});