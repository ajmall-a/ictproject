import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import NavbarAdmin from './NavbarAdmin';



export const AddMentorForm = () => {
  return (
    
   <>
   <NavbarAdmin/>

    <div style={{margin:"5% 20% 10%  20%",backgroundColor:"#eeeeee", padding:"50px",border:"1px solid black",width:"800px"}}>
     <Box sx={{ flexGrow: 1 }}  >
      <Grid container spacing={2} >
       
        <Grid item xs={12}>
        
        <label style={{float: 'left',marginRight:'80px',fontSize:'22px',width:"200px"}} >Mentor Name:</label>
        <TextField
         style={{width:"410px"}}
          id="outlined-password-input"
          label="Enter Name"
          type="text"
         
        />
        </Grid>
        <Grid item xs={12}>
        <label style={{float: 'left',marginRight:'80px',fontSize:'22px',width:"200px"}}>Email:</label>
        <TextField

          style={{width:"410px"}}
          id="outlined-password-input"
          label="Enter E-Mail"
          type="email"
        
        />
        </Grid>
        <Grid item xs={12}>
        <label style={{float: 'left',marginRight:'80px',fontSize:'22px',width:"200px"}} >Phone number:</label>
        <TextField
        style={{width:"410px"}}
          id="outlined-password-input"
          label="Enter Phone Number"
          type="number"
        
        />
        </Grid>
        <Grid item xs={12}>
        <label style={{float: 'left',marginRight:'80px',fontSize:'22px',width:"200px"}} >Password:</label>
        <TextField
     style={{width:"410px"}}
          id="outlined-password-input"
          label="Enter Password"
          type="password"
          
        
        />
        </Grid>
        <Grid item xs={12}>
        <label style={{float: 'left',margin:'5px',fontSize:'22px',width:"600px"}} >Project topic allotted to them:</label>
        <TextField
       
          id="outlined-password-input"
         
          label="Enter Project Name"
          type="text"
          fullWidth
        
        />
        </Grid>
        <Grid item xs={12}>
        <button variant='contained'
       style={{padding:'10px',backgroundColor:'black',color:"white",width:'150px',marginTop:'50px',marginLeft:'300px'}}>Add mentor</button>
        </Grid>
      </Grid>
    </Box>
    </div>
    </>
    
  )
}
