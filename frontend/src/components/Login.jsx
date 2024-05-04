import { Box, Button, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  
  const[user,setUsers]=useState();
  const inputHandler=(e)=>{
    setUsers({...user,[e.target.name]:e.target.value})
    console.log(user);
    }

    const addHandler=()=>{
      console.log(user);
      axios.post("http://localhost:3005/api/login",user)
      .then((res)=>{
    let role=res.data.role;
   
        console.log(res);
        alert(res.data.message);
        sessionStorage.setItem('userToken',res.data.token);

        if(role==='admin')
        {
            navigate('/admindashboard')
        }
        else if(role==='mentor'){
            navigate('/mentordashboard')
        }
        else{
            navigate('/home')
        }
        // console.log(res.data.token);
        // sessionStorage.setItem('userToken',res.data.token);
       
      })
      .catch((error)=>{})
    }

  return (
    <div>

{/* display: 'flex', justifyContent: 'center', alignItems: 'center' */}
 <Box align='center' style={{backgroundColor:'beige',border:'1px solid purple', width:'600px',margin:'0 auto',marginTop:'200px',padding:'20px' }}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
       
      <div>
        <TextField
         
          id="Email"
          label="Email"
          name="email" 
          onChange={inputHandler}
        />
       
      
      </div>
      <div>
        <TextField
         
          id="Password"
          label="Password"
          name="password" 
          onChange={inputHandler}
        />       
      </div>
      <Button onClick={addHandler}variant='contained'style={{marginTop:'20px',color:'white',backgroundColor:'purple'}}>Login</Button>
    
    </Box>

    </div>
  )
}

export default Login