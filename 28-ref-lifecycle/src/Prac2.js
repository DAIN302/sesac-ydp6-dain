import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostList from './PostList'

import './postlist.css'

export default function Prac2() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setPosts(res.data))
        }, 2000);
    }, [])

  return (
    <>
        <h1>Post List</h1>
        { posts.length > 0 ? <PostList lists={posts} /> : <div>Loading</div>}
    </>
  )
}
