// action 操作消息
function addFile(name){
	return {
		type:'ADD_FILM',
		name:name
	}
}

//corresponding reducer 更新state

function filems(state=initialState,action) {
	switch (action.type) {
		case 'ADD_FILM':
			return [{
				id:state.films.reduce((maxId, film) => Math.max(film.id, maxId), -1),...state
			}]
	}
}

// store

var store = createStore(filems)


//reducers流程
 /*
actionCreators.add


 */

