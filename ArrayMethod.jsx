import React from 'react'

export default function ArrayMethod() {

    const Student = [
        {name:"Aleena",email:"aleena@gmail.com",phone: 8310342938,address: "Jayapura"},
        {name:"Alvya",email:"alvya@gmail.com",phone: 985632938,address: "Mangalore"},
        {name:"Arya",email:"arya@gmail.com",phone: 9310342938,address: "Shringeri"},
        {name:"Ana",email:"ana@gmail.com",phone: 7310342938,address: "Kerala"}
    ]

    const num = [1, 2, 3, 4, 5, 6]

    return (
        <div>

            {/* Number Array */}
            {num.map((data) => (
                <div>
                    <h3>{data}</h3>
                    
                </div>
            ))}

            {/* Student Array */}
            {Student.map((stud, index) => (
                <div key={index}>
                    <h3>Name: {stud.name}</h3>
                    <p>Email: {stud.email}</p>
                    <p>Phone: {stud.phone}</p>
                    <p>Address: {stud.address}</p>
                    <hr/>
                </div>
            ))}
            <table border={2}>
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
        </tr>
    </thead>

    <tbody>
        {Student.map((mydata, index) => (
            <tr key={index}>
                <td>{mydata.name}</td>
                <td>{mydata.email}</td>
                <td>{mydata.phone}</td>
                <td>{mydata.address}</td>
            </tr>
        ))}
    </tbody>
</table>

        </div>
    )
}
/*Use MUI card and in that select media add map() method and add one more that is profile with image amd array of objects*/