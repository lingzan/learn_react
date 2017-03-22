import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters} from '../actions/testAction';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
//通过 react-redux 提供的 connect() 方法将包装好的组件连接到Redux
class App extends Component {
  render() {
    //通过调用connect() 注入
    const {dispatch,visibleTodos,visibilityFilter} = this.props;
    console.log(this.props);
    return (
      <div>
        <AddTodo
          onAddClick={text =>{
            dispatch(addTodo(text))
          }
          } />
        <TodoList
          todos={this.props.visibleTodos}
          onTodoClick={(e,text) =>{
            console.log('index=');
            console.log(e);
            console.log('indexend')
            dispatch(completeTodo(e,text))
          }
          } />
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          } />
      </div>
    );
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}

function selectTodos(todos,filter) {
  switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(todo => !todo.comleted);
  }
}
//mapStateToProps mapDispatchToProps
// state 将有store 提供 redux接受数据
function select(state) {
  return {
      visibleTodos:selectTodos(state.todos, state.visibilityFilter),
      visibilityFilter:state.visibilityFilter
  };
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中mapStateToProps
export default connect(select)(App);