// 在前面的章节中，我们学会了使用 action 来描述“发生了什么”，
//和使用 reducers 来根据 action 更新 state 的用法。

// Store 就是把它们联系到一起的对象。Store 有以下职责：

// 维持应用的 state；
// 提供 getState() 方法获取 state；
// 提供 dispatch(action) 方法更新 state；
// 通过 subscribe(listener) 注册监听器;
// 通过 subscribe(listener) 返回的函数注销监听器。

import React,{Component} from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import todoApp from './reducers/todoReducers';
import App from './containers/app'

let store = createStore(todoApp,window.STATE_FROM_SERVER);

let rootElement = document.getElementById('root');
// 首先，我们需要获取从之前安装好的 react-redux 提供的 Provider，并且在渲染之前将根组件包装进 <Provider>。
//这使得我们的 store 能为下面的组件所用
render(
	<Provider store={store}>
		<App />
		
	</Provider>,
	rootElement
);
var c = document.getElementsByClassName('template-img')[0];
const Avatar = (props) => {
  return (
    <div>
      21312
      32131
    </div>
  );
}
render(<Avatar />, c);



