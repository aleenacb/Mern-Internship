import Button from '@mui/material/Button'
import React from 'react'

// 1. Normal Function Component
function MyFunction() {
    return <h3>Normal Function</h3>
}

// 2. Arrow Function Component
const ArrowFunction = () => {
    return (
        <div>
            <h3>Arrow function using multiple statements</h3>
            <h5>Hello</h5>
        </div>
    )
}

// 3. Single Line Arrow Component
const SingleArrow = () => <h3>Single Arrow Function</h3>

export default function ArrowFunctions() {

    const HandleClick = () => alert("Button Clicked!")

    const HandleWelcome = (name) => {
        alert("Hey! " + name)
    }

    return (
        <div>
            <MyFunction />
            <ArrowFunction />
            <SingleArrow />

            <Button variant="contained" onClick={HandleClick} color="success">
                Click Me
            </Button>

            <Button variant="contained" onClick={() => console.log("Hello!")} color="success">
                Welcome
            </Button>

            <Button onClick={() => HandleWelcome("Aleena")}>
                Submit
            </Button>
        </div>
    )
}
