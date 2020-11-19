import React from 'react'
import { Redirect } from 'react-router-dom'
import Markdown from 'react-markdown'

import postsList  from '../posts.json';

const post = (props) => {

    const validId = parseInt(props.match.params.id);
    if (!validId) {
        return <Redirect to="/404"/>
    }
    
    const fetchedPost = {};
    let postExists = false;
    postsList.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : 'No title given';
            fetchedPost.author = post.author ? post.author : 'No author given';
            fetchedPost.date = post.date ? post.date : 'No date given';
            fetchedPost.content = post.content ? post.content : 'No content given';
            postExists = true;
        }
    });
    if (postExists === false) {
        return <Redirect to="/404"/>
    }
    return (
        <div>
            <section className="blog">
                <div className="bd-flex">
                    <div className="post">
                        <h2>{fetchedPost.title}</h2>
                        <small>Published on {fetchedPost.date}</small>
                        <br />
                        <small>{fetchedPost.author}</small>
                        <hr/>
                        <Markdown children={fetchedPost.content}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default post;
