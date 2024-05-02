import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import NavbarAdmin from './NavbarAdmin';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

const AddMentorForm = (props) => {

  const navigate=useNavigate();
  
  const[formdata,setform]=useState(props.data);
  
  const inputHandler=(e)=>{
  
  setform({...formdata,[e.target.name]:e.target.value});
  }
  
  const addData=()=>{
  
    if(props.method==='post')
    {
      console.log('clicked',formdata)
      axios.post('http://localhost:3005/api/mentorform',formdata)
      
      .then((res)=>{
      alert( res.data.Message);
      console.log(res.data);
      navigate('/admindashboard');
      
      })
      .catch((error)=>{
        console.log(error);
      })}

      if(props.method==='put')
{
axios.put('http://localhost:3005/api/update/'+formdata._id,formdata).then((res)=>{
alert(res.data.Message);
console.log(res.data);
navigate('/admindashboard');
window.location.reload(false);
})
.catch((error)=>{
  console.log(error);

})

}
    }
 
  
  
  





  return (
    
   <>
   <NavbarAdmin/>

    <div style={{margin:"5% 20% 10%  20%",backgroundColor:'lavender', padding:"50px",border:"1px solid black",width:"800px"}}>
     <Box sx={{ flexGrow: 1 }}  >
      <Grid container spacing={2} >
       
        <Grid item xs={12}>
        
        <label style={{float: 'left',marginRight:'80px',fontSize:'22px',width:"200px"}} >Mentor Name:</label>
        <TextField
         style={{width:"410px"}}
        
          label="Enter Name"
          type="text"
          name='name'
          value={formdata.name}
          onChange={inputHandler}
         
        />
        </Grid>
        <Grid item xs={12}>
        <label style={{float: 'left',marginRight:'80px',fontSize:'22px',width:"200px"}}>Email:</label>
        <TextField

          style={{width:"410px"}}
        
          label="Enter E-Mail"
          type="email"
          name='email'
          value={formdata.email}
          onChange={inputHandler}
        
        />
        </Grid>
        <Grid item xs={12}>
        <label style={{float: 'left',marginRight:'80px',fontSize:'22px',width:"200px"}} >Phone number:</label>
        <TextField
        style={{width:"410px"}}
         
          label="Enter Phone Number"
          type="number"
          name='phoneNumber'
          value={formdata.phoneNumber}
          onChange={inputHandler}
        
        />
        </Grid>
        <Grid item xs={12}>
        <label style={{float: 'left',marginRight:'80px',fontSize:'22px',width:"200px"}} >Password:</label>
        <TextField
     style={{width:"410px"}}
         
          label="Enter Password"
        
          name='password'
          value={formdata.password}
          onChange={inputHandler}
          
        
        />
        </Grid>
        <Grid item xs={12}>
        <label style={{float: 'left',margin:'5px',fontSize:'22px',width:"600px"}} >Project topic allotted:</label>
        <TextField
       
         
         
          label="Enter Project Name"
          type="text"
          fullWidth
          name='projectTopics'
          value={formdata.projectTopics}
          onChange={inputHandler}
        
        />
        </Grid>
        <Grid item xs={12}>
        <button variant='contained' onClick={addData}
       style={{padding:'10px',backgroundColor:'#7b68ee',color:"white",width:'150px',marginTop:'50px',marginLeft:'300px'}}>Add Data</button>
        </Grid>
      </Grid>
    </Box>
    </div>
    </>
    
  )
}


export default AddMentorForm