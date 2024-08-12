import React from 'react'

export default function PostList({lists}) {
  return (
    <ul className='post-lists'>
        {
            lists.map((list,i)=>{
                return (
                    <li key={list.id} className='post-list'>
                        <h2 className='post-title'>
                            <span className='post-number'>No.{list.id} </span>{list.title}
                        </h2>
                        <p className='post-content'>{list.body}</p>
                    </li>
                )
            })
        }
    </ul>
  )
}
