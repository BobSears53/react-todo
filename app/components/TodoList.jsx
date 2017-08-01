var React = require('react');
var {connect} = require('react-redux');
var TodoAPI = require('TodoAPI');
import Todo from 'Todo';

//class TodoList extends React.Component {
export class TodoList extends React.Component {
    render () {
        var {todos, showCompleted, searchText} = this.props;
        var renderTodos = () => {
            var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

            if(filteredTodos.length ===0) {
                return (
                    <p className="container__message">Nothing To Do</p>
                );
            }
            return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
                return (
                   <Todo key={todo.id} {...todo}/>
                );
            });
        };

        return  (
            <div>
                {renderTodos()}
            </div>
        )
    }
};

export default connect(
    (state) => {
      return state;
    }
)(TodoList);