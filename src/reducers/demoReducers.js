import { combineReducers } from 'redux';
import demo from '../actions/demoAction';

var app = (state = 0,action)=>{
 	switch(action.type){
 		case 'EAT_APPLE':
 			return state + 1;
 		case 'PICK_APPLE':
 			return state - 1;
 		default:
 			return false;
 	}
 }