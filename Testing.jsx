import React from 'react'
import image from './image.jpg'


export default function Testing() {
    const mystyle = {
    color: "yellow",
    backgroundColor:"Pink"
  }
  return (
    <div>
      <h2 style={{ color: 'blue', border: '2px red dashed' }}>
  Inline CSS</h2>
      <h4 style={mystyle}>Internal CSS</h4>
      <h5 className='myclass'>External CSS</h5><br/>
      <img src={image} alt="" height={200} width={200}/>
    </div>
  )
}

