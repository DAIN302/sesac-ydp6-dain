import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostList from './PostList'
import PostList2 from './PostList2'

import './styles/PostList.scss'

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
        <h1 className='title'>Post List</h1>
        {/* { posts.length > 0 ? <PostList lists={posts} /> : <div>Loading</div>} */}
        { posts.length > 0 ? <PostList2 lists={posts} /> : <div>Loading</div>}
    </>
  )
}
