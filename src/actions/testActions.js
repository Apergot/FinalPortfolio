
import { TEXT_REDUX } from './types';

export const testRedux = () => dispatch => {
    console.log('Redux is working fine');
    dispatch({
        type: TEXT_REDUX,
        payload: 'Yikes!'
    });
}