import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../styles/postslist.css'
import {connect} from 'react-redux'


import {retrieveAllPosts} from '../redux/actions/postActions';

const PostList = (props) => {

        useEffect(() => {
            props.retrieveAllPosts();
        }, [])

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
                                    <p className="blog__post__text">{`${post.body[0].children[0].text.split(" ").splice(0, 16).join(" ")}...`}</p>
                                    <Link to={`/blog/${post.slug.current}`} className="blog__post__cta" data={post}>Read more</Link>
                                </div>
                            </div>
                        )
                    }) : <div><p>No blog posts found</p></div>}
                </div>
        );
}

const mapStateToProps = state => ({
    posts: state.posts.list
});

export default connect(mapStateToProps, {retrieveAllPosts})(PostList);