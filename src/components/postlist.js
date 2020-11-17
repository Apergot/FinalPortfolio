import React from 'react'
import Markdown from 'react-markdown'

import postlist from '../posts.json'

const PostList = () => {
    console.log(postlist)
    return (
        <div className="postlist">
            <h1 className="title">All Posts</h1>
            {postlist.length && 
                postlist.map((post, i) => {
                    return (
                        <div className="post-card">
                            <h2>{post.title}</h2>
                            <small>Published on {post.date} by {post.author}</small>
                            <hr/>
                            <Markdown children={post.content}/>
                        </div>
                    )
                })}
        </div>
    )
}

export default PostList;