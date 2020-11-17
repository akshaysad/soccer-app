
let dob = new Date();
let prev = dob.getFullYear() - 18;
dob.setFullYear(prev);

let exp = new Date();
let next = exp.getFullYear() + 4;
exp.setFullYear(next);

const initialState = {
  	notifications: {
  		show: false,
  		message: ''
  	},
  	loader: {
  		show: false
  	},

};

function rootReducer(state = initialState, action)
{

	return state;
}

export default rootReducer;
