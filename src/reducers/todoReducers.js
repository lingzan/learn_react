// 现在我们已经确定了 state 对象的结构，就可以开始开发 reducer。
//reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
// 之所以称作 reducer 是因为它将被传递给 Array.prototype.reduce(reducer, ?initialValue) 方法。
//保持 reducer 纯净非常重要。永远不要在 reducer 里做这些操作：
// 修改传入参数；
// 执行有副作用的操作，如 API 请求和路由跳转；
// 调用非纯函数，如 Date.now() 或 Math.random()。
//(纯函数是这样一种函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。)
// combineReducers() 合并单一的reducer
//import {VisibilityFilters} from './actions/test';
import { combineReducers } from 'redux'
import { VisibilityFilters } from '../actions/testAction'
const { SHOW_ALL } = VisibilityFilters
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_TODO':
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          text:action.text,
          completed: !state.completed
        }),
        ...state.slice(action.index + 1)
      ];
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp