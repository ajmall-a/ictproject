import React, { useEffect, useState } from 'react'
import SideBarAdmin from './SideBarAdmin'
import AdminFooter from './AdminFooter'
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Style } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import AddMentorForm from './AddMentorForm';
import axios from 'axios';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.white,
   backgroundColor:'black', 
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const AdminDashboard = () => {
  const [dataset,setData]=useState([]);


  useEffect(()=>{
   axios.get('http://localhost:3005/api/admindashboard').then((res)=>{
     console.log(res);
     setData(res.data);
   })
   
   },[])

  
   const deleteMen=(id)=>{
    axios.delete('http://localhost:3005/api/delete/'+id).then((res)=>{
      alert(res.data.Message);
      console.log(res.data);
      window.location.reload(false);
          })
          .catch((error)=>{
            console.log(error);
          })
   }
   //  update 
  const[update,setUpdate]=useState(false);
  const [value,setValue]=useState([]);

  const updateMen=(data)=>{
    console.log(data);
    setUpdate(true);
    setValue(data);
  }
  

   
    // return(
    //   <div>
    //   <SideBarAdmin/>
   
    //    <div >
    let finalJSX=(
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{marginTop:'100px',marginLeft:'250px'}}>
        <Grid item xs={8}>
          
        <Typography variant="h5" gutterBottom style={{textAlign:'center'}}>Project Details</Typography>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell style={{color:'white',fontSize:'20px'}}>Project Topic</StyledTableCell>
            
            <StyledTableCell style={{color:'black'}} align="right">.</StyledTableCell>
            <StyledTableCell style={{color:'black'}}  align="right">.</StyledTableCell>
            <StyledTableCell style={{color:'black'}} align="right">.</StyledTableCell>
            <StyledTableCell style={{color:'black'}}  align="right">.</StyledTableCell>
          
          
          </TableRow>
        </TableHead>
        <TableBody>
          {dataset.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell style={{color:'black'}} align="right"></StyledTableCell>
            <StyledTableCell style={{color:'black'}} align="right"></StyledTableCell>

              <StyledTableCell>  <button style={{  margin:'5px', padding:'5px',fontSize:'12px',backgroundColor:'black',color:'white'} }>EDIT</button></StyledTableCell>
              <StyledTableCell>  <button style={{  margin:'5px', padding:'5px',fontSize:'12px',backgroundColor:'black',color:'white'} }>DELETE</button></StyledTableCell>
              
             
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {/* <div style={{textAlign:'center'}}><button style={{  margin:'5px', padding:'5px',fontSize:'14px',backgroundColor:'black',color:'white'} }>ADD PROJECT TOPIC</button> </div> */}
        </Grid>

    

        <Grid item xs={8}>
          <Typography variant="h5" gutterBottom style={{textAlign:'center'}}>Mentor Details</Typography>
        <TableContainer component={Paper} >
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead >
          <TableRow >
            <StyledTableCell style={{color:'white'}}>Name</StyledTableCell>
            
            <StyledTableCell style={{color:'white'}} align="right">Email</StyledTableCell>
            <StyledTableCell style={{color:'white'}} align="right">Phone Number</StyledTableCell>
            <StyledTableCell style={{color:'black'}} align="right">hi</StyledTableCell>
            <StyledTableCell style={{color:'black'}} align="right">hi</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataset.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
            
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.phoneNumber}</StyledTableCell>
              <StyledTableCell>  <button onClick={()=>updateMen(row)} style={{  margin:'5px', padding:'5px',fontSize:'12px',backgroundColor:'black',color:'white'} }>EDIT</button></StyledTableCell>
              <StyledTableCell>  <button onClick={()=>deleteMen(row._id)} style={{  margin:'5px', padding:'5px',fontSize:'12px',backgroundColor:'black',color:'white'} }>DELETE</button></StyledTableCell>
              </StyledTableRow>
          ))}
        </TableBody>

      
      </Table>
      
    </TableContainer>
 
    {/* <div style={{textAlign:'center'}}><button style={{  margin:'5px', padding:'5px',fontSize:'14px',backgroundColor:'black',color:'white'} }>ADD MENTOR</button>  */}

{/* </div> */}
        </Grid>
        
      </Grid>
    </Box>
    )
    
  
 if(update) finalJSX=<AddMentorForm method='put'data={value}/> 

     
  return (
    <div>
      <SideBarAdmin/>
   
     <div >
   
   {finalJSX}

    //  {/* <AdminFooter/> */}
    * <Typography variant="body2" color="black" style={{textAlign:'center',marginTop:'200px'}}>
       {'Copyright © '}
      <Link color="inherit" href="https://ictkerala.org/">
      ICT ACADEMY OF KERALA  
      </Link>{'        '}
    
      {new Date().getFullYear()}
      {'.'}
     </Typography> 
    </div>
    </div>
    )
  //  );

   
   
  
}

export default AdminDashboard