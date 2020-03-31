var initialState = {
	by: 'status',
	value: 1  //1: tăng, -1: giảm
}


var myReducer = (state = initialState, action) => {
	if(action.type === 'SORT'){
		var { by, value } = action.sort; //by = action.sort.by
		var status = state;
		return { by, value }
	}
	return state;
}

export default myReducer;