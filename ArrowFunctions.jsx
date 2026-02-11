import Button from '@mui/material/Button'
import React from 'react'

export default function ArrowFunctions() {
    // 1. Normal function

    function Myfunction() {
        return (
            <h3>Normal function</h3>
            
        )
    }
    // 2. Arrow function
const Arrow = () => {
    return(
        <>
            <div>
                <h3>Arrow function using multiple statements</h3>
                <h5>Hello</h5>
            </div>
        </>
    )
}

// 3. Arrow function with single statement
const Singlearrow = () => <h3>Arrow function with single statement</h3>
const HandleClick = () => alert("Button Clicked!")
const Handlewelcome = (name) => {
    return(
        alert("Hey!" +name)
    )
}
  return (
    <div>
      <Myfunction/>
      <Arrow/>
      <Singlearrow/>
      
      <Button variant="contained" onClick={HandleClick}color="success">Click Me</Button>
      <Button variant="filled" onClick={()=>console.log("Hello!")} color='success'>Welcome</Button>
      <Button onClick={()=>Handlewelcome("Aleena")}>Submit</Button>
    </div>
  )
}
