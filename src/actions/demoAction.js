/*
	state:{
		apple{
			id:'1',
			name:'1',
			weight:'23',
			status: 0|1,
		},
	}
*/
export function eat(id) {
	return {
		type:'EAT_APPLE',
		id,
	}
}

export function pick(){
	return {
		type:'PICK_APPLE'
	}
}