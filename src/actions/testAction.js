/*
*Action 是把数据从应用（译者注：这里之所以不叫 view 是因为这些数据有可能是服务器响应
*，用户输入或其它非 view 的数据 ）传到 store 的有效载荷。它是 store 数据的唯一来源。
*一般来说你会通过 store.dispatch() 将 action 传到 store。
*/
/*
 * action 类型
 */

// export const ADD_TODO = 'ADD_TODO';
// export const COMPLETE_TODO = 'COMPLETE_TODO';
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
// export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
// export const REQUEST_POSTS = 'REQUEST_POSTS';
// export const RECEIVE_POSTS = 'RECEIVE_POSTS';

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action 创建函数
 */

export function addTodo(text) {
  return { type: 'ADD_TODO', text }
}

export function completeTodo(index,text) {
  return { type: 'COMPLETE_TODO', index, text }
}

export function setVisibilityFilter(filter) {
  return { type: 'SET_VISIBILITY_FILTER', filter }
}

