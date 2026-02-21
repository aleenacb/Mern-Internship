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
//import MUICard from './Components/ES7/MUICard'
import SpreadOperator from './Components/ES7/SpreadOperator'
import MC from './Components/ES7/MC'
import MUIAppbar from './Components/MUI/MUIAppbar'
import Destructuring from './Components/ES7/Destructuring'
import ImportModule from './Components/ES7/ImportModule'
//import ExportModule from './Components/ES7/ExportModule'
import TernaryOperator from './Components/ES7/TernaryOperator'
import Props from './Components/ES7/Props'
import HookUseState from './Components/Hook/HookUseState'
import Counter from './Components/Hook/Counter'
import ColorMode from './Components/Hook/ColorMode'
export default function App() {
  return (
    
      /* <h1 style={{ color: "blue" }}>Inline CSS</h1> */
      /* <Firstapp /> */
      /* <Testing />*/
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ColorMode/>}></Route>
          <Route path='/'element={<Counter/>}></Route>
          <Route path='/Hook' element={<HookUseState/>}></Route>
          <Route path='/Props' element={<Props name={"Aleena"} />}></Route>
          <Route path='/' element={<ImportModule/>}></Route>
          <Route path='/Destructuring'element={<Destructuring/>}></Route>
          <Route path='/MUIAppbar'element={<MUIAppbar/>}></Route>
          <Route path='/' element={<MC/>}></Route>
          <Route path='/spread' element={<SpreadOperator/>}></Route>
          <Route path='/'element={<ArrayMethod/>}></Route>
          <Route path='/BasicTable' element={<BasicTable/>}></Route>
          <Route path='/Testing' element={<Testing/>} />
          <Route path='/Register' element={<Register/>}/>
          <Route path='/' element={<Firstapp/>}/>
          <Route path='/af' element={<ArrowFunctions/>}></Route>
          <Route path='/TernaryOperator' element={<TernaryOperator/>}></Route>
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
