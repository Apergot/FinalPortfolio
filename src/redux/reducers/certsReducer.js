import { RETRIEVE_ALL_CERTS } from '../actions/types';

const initialState = {
    list: null
}

export default function certs(state = initialState, action) {
    switch(action.type){
        case RETRIEVE_ALL_CERTS:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
}