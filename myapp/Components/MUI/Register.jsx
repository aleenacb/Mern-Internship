import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MUIAppbar from './MUIAppbar';

export default function Register() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    Address: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = () => {
    const existingusers = JSON.parse(localStorage.getItem('userdetails')) || [];
    console.log(existingusers)

    const allusers = [...existingusers, formData]

    localStorage.setItem('userdetails', JSON.stringify(allusers))
    alert("Registration done!");
  }

  return (
    <div>
      <MUIAppbar />
      <Paper elevation={20} style={{ width: "590px", padding: "30px" }}>
        <Typography variant='h4'>Register Page</Typography>

        <TextField
          variant='filled'
          type='text'
          label="Name"
          name='name'
          fullWidth
          style={{ marginBottom: "20px", marginLeft: "5px" }}
          onChange={handleChange}
        />

        <TextField
          variant='filled'
          type='email'
          label="Email"
          name='email'
          fullWidth
          style={{ marginBottom: "20px" }}
          onChange={handleChange}
        />

        <TextField
          variant='outlined'
          type='password'
          label="Password"
          name='password'
          fullWidth
          style={{ marginBottom: "20px" }}
          onChange={handleChange}
        />

        <TextField
          variant='standard'
          type='tel'
          label="Phone"
          name='phone'
          fullWidth
          style={{ marginBottom: "20px" }}
          onChange={handleChange}
        />

        <TextField
          variant='filled'
          multiline
          rows={5}
          type='text'
          label="Address"
          name='Address'
          fullWidth
          style={{ marginBottom: "20px" }}
          onChange={handleChange}
        />

        <Button variant='contained' fullWidth onClick={handleRegister}>
          Register
        </Button>

      </Paper>
    </div>
  )
}
