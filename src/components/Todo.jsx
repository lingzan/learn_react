import React,{ Component, PropTypes} from 'react';

export default class Todo extends Component {
	render(){
		return (
			<li completed={this.props.completed} onClick={this.props.oclick} text={this.props.text}
				style = {{textDecoration:this.props.completed ? 'line-through':'none',
						cursor:this.props.completed ? 'default':'pointer'
				}}
			>{this.props.text}</li>
		)
	}
}

// Todo.propTypes = {
// 	oclick:PropTypes.func.isRequired,
// 	text: PropTypes.string.isRequired,
// 	completed: PropTypes.bool.isRequired
// }