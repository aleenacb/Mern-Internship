import React from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Register() {
  return (
    <div>
      <Paper elevation={20} style={{width:"500px", padding:"30px"}}>
      <Typography variant='h4'>Register Page</Typography>
      <TextField variant='filled' type='text'label="Name" fullWidth style={{marginBottom:"20px", marginLeft:"5px"}}></TextField>
      <TextField variant='filled' type='email' label="Email" fullWidth style={{marginBottom:"20px"}}/>
      <TextField variant='outlined' type='password' label="Password" fullWidth style={{marginBottom:"20px"}}/>
      <TextField variant='standard'type='phone' label="Phone" fullWidth style={{marginBottom:"20px"}}/>
      <TextField variant='filled'multiline rows = {5}type='address' label="Address" fullWidth style={{marginBottom:"20px"}}/>
      <Button variant='contained' fullWidth>Register</Button>
     </Paper>
    </div>
  )//task->Go through mui (Components)
}
