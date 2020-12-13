import { RETRIEVE_ALL_CERTS } from './types';

export const retrieveAllCerts = () => dispatch => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization',`Basic ${btoa(`${process.env.REACT_APP_BASIC_AUTH_USER}:${process.env.REACT_APP_BASIC_AUTH_PASSWD}`)}`);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }
    fetch(process.env.REACT_APP_API_LINK_CERTS, requestOptions)
    .then(res => res.json())
    .then(data => {
        dispatch({
            type: RETRIEVE_ALL_CERTS,
            payload: data
        });
    })
    .catch(err => console.log('error', err));
}