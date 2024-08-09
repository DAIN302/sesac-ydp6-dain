import React, { useEffect, useState } from 'react'

import fakePosts from './fakedata'
import PostList from './PostList'

import './postlist.css'

export default function Prac1() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setTimeout(() => {
            // const newPosts = posts.concat(fakePosts)
            setPosts(fakePosts)
        }, 2000);
    }, [])

  return (
    <>
        <h1>Post List</h1>
        { posts.length > 0 ? <PostList lists={posts} /> : <div>Loading</div>}
    </>
  )
}
