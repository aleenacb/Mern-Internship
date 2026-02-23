import React, { useEffect, useState } from 'react'
import MUIAppbar from '../MUI/MUIAppbar';
import axios from 'axios';
export default function ApiAxios() {
    const[data,setData] = useState([]);
    const handlefetch = () => {
    axios.get("https://dummyjson.com/quotes")

    .then((response) => {
        console.log(response)
        console.log(response.data.quotes)
        setData(response.data.quotes)
    })
    .catch((error) => {
        console.log(error);
    })
    }
    useEffect(() => {
        handlefetch()
    });
  return (
    <div>
        <MUIAppbar/>
      <button onClick={handlefetch}>Click Me!</button>
      {data.map((item)=>{
        return (
            <>
            <h3>{item.id}</h3>
            <h3>{item.quote}</h3>
            <h3>{item.author}</h3>
            </>
        )
    })}
      
    </div>
  )
}
//Dummy json quotes(fake json api)
//when we serach something in web browser, sometimes it shows : 200 (error)->request is successful
//201 successfully inserted
//400 page not found
//500 client side

//fake json api for product
//title, thumbnail,description, brand