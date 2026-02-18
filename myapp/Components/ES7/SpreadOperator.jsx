import React from 'react'

export default function SpreadOperator() {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [6, 7, 8, 9, 10];
    const combinedArray = [...array1,...array2];

    const object1 = {cname: "codelab",ctype: "IT", year: 2026}
    const object2 = {caddress:"mangalore"}
    const companydetails = {...object1,...object2}
    console.log(companydetails)
  return (
    <div>
      {combinedArray}
      {companydetails}
    </div>
  )
}
