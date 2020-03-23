var createPlayground = () => (new Array(10).fill().map( el => (new Array(5).fill())));

function getCurrentObject(){
	if (obj.state == 'static'){
		 let num = Math.floor(Math.random() * Math.floor(3))
		 obj = {type: Object.keys(TYPE_COLORS)[num], state:'falling', position: INITIAL_POSITIONS[Object.keys(TYPE_COLORS)[num]]}
	}
	return obj;
}