import status from './status'; //reducer Status
import sort from './sort'; //reducer Sort
import { combineReducers } from 'redux';

const myReducer = combineReducers({
	status,
	sort //sort: { by: by, value: value }
});

export default myReducer;