import React from 'react'

export default function PracTable(props) {
    const { posts } = props
  return (
    <table border="1" cellPadding="10" cellSpacing="1">
        <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
            </tr>
        </thead>
        <tbody>
            {
                posts.length > 0 &&
                posts.map(post =>{
                    return (
                        <tr key={post.id}>
                            <td>{post.id}</td>        
                            <td>{post.title}</td>        
                            <td>{post.writer}</td>        
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}
