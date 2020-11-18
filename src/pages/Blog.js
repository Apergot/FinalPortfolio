import React from 'react'

import PostList from '../components/postlist';

export default function Blog() {
    return (
        <main>
            <section className="blog section">
                <h2 className="section-title"> My Blog Posts</h2>
                    <PostList />
            </section>
        </main>
    )
}
