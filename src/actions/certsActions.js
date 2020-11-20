import { RETRIEVE_ALL_CERTS } from './types';

export const retrieveAllCerts = () => dispatch => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization',`Basic ${btoa(`${process.env.REACT_APP_BASIC_AUTH_USER}:${process.env.REACT_APP_BASIC_AUTH_PASSWD}`)}`);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }
    fetch('http://portfolioapi-env.eba-xegfa6hp.eu-west-2.elasticbeanstalk.com/api/certs', requestOptions)
    .then(res => res.json())
    .then(result => console.log(result))
    .then(data => {
        console.log('esto es data', data);
        dispatch({
            type: RETRIEVE_ALL_CERTS,
            payload: data
        });
    })
    .catch(err => console.log('error', err));
}