import React from 'react'

export default function PostList({lists}) {
  return (
    <ul>
        {
            lists.map((list,i)=>{
                return (
                    <li key={list.id}>
                        <h2><span>No.{list.id} </span>{list.title}</h2>
                        <p>{list.body}</p>
                    </li>
                )
            })
        }
    </ul>
  )
}
