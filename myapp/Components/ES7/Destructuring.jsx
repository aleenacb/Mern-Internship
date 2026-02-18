import React from 'react'
import MUIAppbar from '../MUI/MUIAppbar'

export default function Destructuring() {
    const number = [1, 2, 3, 4, 5, 6]
    const [,,,d,e] = number
    const num4 = number[0]
  return (
    <div>
        <MUIAppbar/>
      {d}{e}{num4}
    </div>
  )
}
