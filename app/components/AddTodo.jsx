var React = require('react');

var AddTodo = React.createClass ({
    handleSubmit: function (e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;

        if(todoText.length > 0) {
            this.refs.todoText.value = ''; // clear the input value for the next time
            this.props.onAddTodo(todoText);
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function () {
        var {id, text} = this.props;

        return  (
        <div className="container__footer">
            <form ref="form" onSubmit={this.handleSubmit}>
                <input type="text" ref="todoText" placeholder="Enter Your Todo here" />
                <button className="button expanded">Add Todo</button>
            </form>
        </div>

        )
    }
});

module.exports = AddTodo;