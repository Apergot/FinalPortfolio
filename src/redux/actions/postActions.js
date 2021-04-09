import { RETRIEVE_ALL_POSTS } from './types';
import sanityClient from '../../client';

export const retrieveAllPosts = () => dispatch => {
    sanityClient.fetch(
        `*[_type == "post"]{
            title,
            slug,
            author,
            body,
            publishedAt,
            mainImage{
                asset ->{
                    _id,
                    url
                }
            }
        }`
    )   
    .then(data => {
        dispatch({
            type: RETRIEVE_ALL_POSTS,
            payload: data
        });
    })
    .catch(err => console.log('error', err));
}