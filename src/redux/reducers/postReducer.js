import { RETRIEVE_ALL_POSTS } from '../actions/types';

const initialState = {
    list: null
}

export default function posts(state = initialState, action) {
    switch(action.type){
        case RETRIEVE_ALL_POSTS:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
}