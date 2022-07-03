import { SET_TOTAL, SET_NUMBER_A, SET_NUMBER_B, SET_OPERATION, RESET_ALL } from '../action/calculator-actions.js';

export const INITIAL_CALCULAOTR_STATE = {
	total: '0',
	numberA: '',
	numberB: '',
	operation: null,
};

export const calculatorReducer = function (state = INITIAL_CALCULAOTR_STATE, action) {
	if (!action.type) {
		console.error('state 변경은 지정된 action에 한해서만 가능합니다.');
	}
	switch (action.type) {
		case SET_TOTAL:
			return {
				...state,
				total: action.payload,
			};
		case SET_NUMBER_A:
			return {
				...state,
				numberA: action.payload,
			};
		case SET_NUMBER_B:
			return {
				...state,
				numberB: action.payload,
			};
		case SET_OPERATION:
			return {
				...state,
				operation: action.payload,
			};
		case RESET_ALL:
			return INITIAL_CALCULAOTR_STATE;
		default:
			console.error(`잘못된 action type : ${action.type}`);
			return state;
	}
};