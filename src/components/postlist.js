import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/postslist.css'
import {connect} from 'react-redux'


import {retrieveAllPosts} from '../redux/actions/postActions';

const PostList = (props) => {


        return (
                <div className="bd-flex">
                {props.posts != null ? props.posts.map((post, i) => {
                        return (
                            <div key={i} className="blog__post">
                                <div className="blog__post__img">
                                    <img src={post.mainImage.asset.url} alt={`Blog Post img from post`}/>
                                </div>
                                <div className="blog__post__info">
                                    <div className="blog__post__date">
                                        <span>{post.publishedAt}</span>
                                    </div>
                                    <h1 className="blog__post__title">{post.title}</h1>
                                    <p className="blog__post__text">{post.desc}</p>
                                    <Link to={`/blog/${post.slug.current}`} className="blog__post__cta" data={post}>Read more</Link>
                                </div>
                            </div>
                        )
                    }) : <div><p>que pasa</p></div>}
                </div>
        );
}

const mapStateToProps = state => ({
    posts: state.posts.list
});

export default connect(mapStateToProps, {retrieveAllPosts})(PostList);