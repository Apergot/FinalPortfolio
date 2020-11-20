import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/postslist.css'
import postlist from '../posts.json'

const PostList = () => {
    /*
    const excerptList = postlist.map(post => {
        return post.desc.split(' ').slice(0, 10).join(' ');
    })*/
    return (
        <div className="bd-flex">
            {postlist.length && 
                postlist.map((post, i) => {
                    return (
                        <div key={i} className="blog__post">
                            <div className="blog__post__img">
                                <img src={`${process.env.REACT_APP_IMAGES_LINK + post.img}`} alt={`Blog Post img from ${post.id} post`}/>
                            </div>
                            <div className="blog__post__info">
                                <div className="blog__post__date">
                                    <span>{post.date}</span>
                                </div>
                                <h1 className="blog__post__title">{post.title}</h1>
                                <p className="blog__post__text">{post.desc}</p>
                                <Link to={`/blog/${post.id}`} className="blog__post__cta">Read more</Link>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default PostList;