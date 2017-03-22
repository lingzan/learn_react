import {combineReducers } from 'redux';
import {
	SELECT_SUBREDDIT,REQUEST_POSTS, RECEIVE_POSTS
} from '../actions/asynTest';

function selectedsubreddit(state='reactjs',action) {
	switch(action.type) {
		case SELECT_SUBREDDIT:
			return action.subreddit;
		default:
			return state
	}
}

function posts(state = {
	isFetching:false,
	didInvalidate:false,
	items:[]
},action) {
	switch (action.type) {
		case REQUEST_POSTS:
			return {
				...state,
				 {
				 	isFetching:true,
				 	didInvalidate: true,
				 }
			};
		case  RECEIVE_POSTS:
			return {
				...state,
				{
					isFetching: false,
			        didInvalidate: false,
			        items: action.posts,
			        lastUpdated: action.receivedAt
				}
			}
		default:
			return state;
	}
}