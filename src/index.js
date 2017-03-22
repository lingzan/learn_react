// import React from 'react'
// import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import Counter from './components/test.jsx'
// import counter from './reducers/testReducers.js'

// const store = createStore(counter)
// const rootEl = document.getElementById('root')

// const render = ()=>ReactDOM.render(
// 		 <Counter
//     value={store.getState()}
//     onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//     onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//   />,
//   rootEl
// 	)

// render()

// store.subscribe(render)

/* test 2*/
import React from 'react';
import { render } from 'react-dom'
import { bindActionCreators } from 'redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import apple from './reducers/appleBasketReducers';
import App from './containers/appleBasket'
const store = createStore(apple);
const rootEl = document.getElementById('root')

render(
		<Provider store={store}>
		 	<App />
		</Provider>,
  rootEl
	)

