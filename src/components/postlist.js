import React from 'react'
import Markdown from 'react-markdown'
import { Link } from 'react-router-dom'

import postlist from '../posts.json'

const PostList = () => {
    const excerptList = postlist.map(post => {
        return post.desc.split(' ').slice(0, 10).join(' ');
    })
    return (
        <div className="bd-flex">
            {postlist.length && 
                postlist.map((post, i) => {
                    return (
                        <div key={i} className="post-card">
                            <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
                            <small>Published on {post.date} by {post.author}</small>
                            <hr/>
                            <Markdown children={excerptList[i]}/>
                            <Link to={`/post/${post.id}`} className="blog-button">Read more</Link>
                        </div>
                    )
                })}
        </div>
    )
}

export default PostList;