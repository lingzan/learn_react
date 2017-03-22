import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
	render() {
		return (
			<ul>
				{this.props.todos.map((todo,index) => 
					<Todo {...todo} ref='aim' key={index} oclick={(index,todo)=>{this.qqClick(index,todo)}} />)
				
				}
			</ul>
		)
	}
	qqClick(index,todo) {
		var text = this.refs.aim;
		console.log(text);
		this.props.onTodoClick(index,text);
	}
}
// TodoList.propTypes = {
//   onTodoClick: PropTypes.func.isRequired,
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     text: PropTypes.string.isRequired,
//     completed: PropTypes.bool.isRequired
//   }).isRequired).isRequired
// }