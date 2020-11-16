import { TEXT_REDUX } from '../actions/types';

const initialState = {
    result:''
}

export default function test(state = initialState, action) {
    switch(action.type){
        case TEXT_REDUX:
            return {
                ...state,
                result: action.payload
            };
        default:
            return state;
    }
}