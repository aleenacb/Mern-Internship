import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Testing from './Components/Testing'
import Firstapp from './Components/Firstapp'
import './Components/style.css'
import Typography from '@mui/material/Typography'
import Register from './Components/MUI/Register'
import ArrowFunctions from './Components/ES7/ArrowFunctions'
import BasicTable from './Components/MUI/BasicTable'
import ArrayMethod from './Components/ES7/ArrayMethod'
//import MediaCard from './Components/ES7/MediaCard'
import SpreadOperator from './Components/ES7/SpreadOperator'
import MC from './Components/ES7/MC'
export default function App() {
  return (
    
      /* <h1 style={{ color: "blue" }}>Inline CSS</h1> */
      /* <Firstapp /> */
      /* <Testing />*/
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MC/>}></Route>
          <Route path='/' element={<SpreadOperator/>}></Route>
          <Route path='/'element={<ArrayMethod/>}></Route>
          <Route path='/BasicTable' element={<BasicTable/>}></Route>
          <Route path='/a' element={<Testing/>} />
          <Route path='/' element={<Register/>}/>
          <Route path='/' element={<Firstapp/>}/>
          <Route path='/af' element={<ArrowFunctions/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
    // mui installation
  )
}

//<></>->react fragments
//php
//task -> difference between php and react
//We can type instead of this npm install react-router-dom is npm i react-router-dom
//Router->It is to navigate any file from one file to another
