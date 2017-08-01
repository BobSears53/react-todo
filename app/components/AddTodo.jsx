var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

// class AddTodo extends React.Component {
export class AddTodo extends React.Component {
    handleSubmit (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var todoText = this.refs.todoText.value;

        if(todoText.length > 0) {
            this.refs.todoText.value = ''; // clear the input value for the next time
            dispatch(actions.startAddTodo(todoText));
        } else {
            this.refs.todoText.focus();
        }
    }
    render () {
        var {id, text} = this.props;

        return  (
        <div className="container__footer">
            <form ref="form" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" ref="todoText" placeholder="Enter Your Todo here" />
                <button className="button expanded">Add Todo</button>
            </form>
        </div>

        )
    }
};

export default connect()(AddTodo);