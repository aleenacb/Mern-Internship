import React, { useState } from 'react'

export default function HookUseState() {

  // 1️ Single state handling 
  const [color, setColor] = useState(" ")
  const handlecolor = () => setColor('yellow')

  // 2️ Company State (Object)
  const [company, setCompany] = useState({
    companyName: "CoDELab Systems",
    companyType: "IT",
    year: 2013
  })

  // Change normal variable (this will not re-render — but keeping as you wrote)
  const [favcolor, setFavcolor] = useState("black")
    const handleChange = () => {
    setFavcolor("red")
    console.log("Color changed to red")
}


  // Update company name
  const updateCompany = () => {
    setCompany({
      ...company,
      companyName: "Infosys"
    })
  }

  return (
    <div>

      <h3 style={{ color: favcolor }}>my favourite color is {favcolor}</h3>
      <button onClick={handleChange}>Change color</button>

      <h3>Using UseState</h3>
      <h3 style={{ color: color }}>my favourite color is {color}</h3>
      <button onClick={handlecolor}>Change color</button>

      <h2>
        WELCOME TO {company.companyName}, {company.companyType} company,
        Since {company.year}
      </h2>

      <button onClick={updateCompany}>
        Change Company Name
      </button>

    </div>
  );
}
