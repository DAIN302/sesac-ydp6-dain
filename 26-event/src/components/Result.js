import React from 'react'

export default function Result({data}) {
    const {fruit, bgc, color, content}= data
  return (
   <>
    <img src={'./image/'+fruit+'.png'}/>
    <div style={{backgroundColor : bgc, color : color}}>{content}</div>
   </>
  )
}
