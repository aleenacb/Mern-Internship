import React, { useEffect, useState } from 'react'
import MUIAppbar from '../MUI/MUIAppbar'
export default function HookUseEffect() {
    //syntax
    //useEffect(cb,[]);
    //cb = callback function
    //[] = dependency 
    const[count, setCount] = useState(0)
    useEffect (() => {
      setTimeout(() => {
      setCount((numcount)=>numcount + 1)
     },5000);
    });
  return (
    <div>
      <h3>I h've rendered {count}times</h3>
      <MUIAppbar/>
    </div>
  );
}
//Axios
//npm i axios