import React from 'react'
import { connect } from "react-redux";

const post = (props) => {

    const {slug} = props.match.params;
    const currentPost = props.posts.find((element) => {
        if (element.slug.current === slug) return element;
    });
    
    return (
        <div>
            <section className="blog">
                <div className="bd-flex">
                    <div className="post">
                        <h2>{slug}</h2>
                        <small>Published on {currentPost.publishedAt}</small>
                        <br />
                        <small>Alejandro Perdomo</small>
                        <hr/>
                        <p>{currentPost.body[0].children[0].text}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.posts.list
});

export default connect(mapStateToProps)(post);
