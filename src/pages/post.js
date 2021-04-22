import React from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from "react-redux";
import BlockContent from '@sanity/block-content-to-react';

const post = (props) => {
    if (props.posts == null) {
        return <Redirect to='/blog'/>;
    }

    const {slug} = props.match.params;
    const currentPost = props.posts.find((element) => {
        if (element.slug.current === slug) {
            return element;
        }
    });
    
    return (
        <div>
            <section className="blog">
                <div className="bd-flex">
                    <div className="post">
                        <h2>{currentPost.title}</h2>
                        <small>Published on {currentPost.publishedAt.substring(0, 10)}</small>
                        <br />
                        <small>Alejandro Perdomo</small>
                        <hr/>
                            <BlockContent 
                                blocks={currentPost.body} 
                                projectId={process.env.REACT_APP_SANITY_ID} 
                                dataset={process.env.REACT_APP_SANITY_DATASET}
                                className="postBlockContent">

                            </BlockContent>
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
