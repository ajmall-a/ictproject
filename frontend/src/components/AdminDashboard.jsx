import React from 'react'
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


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const AdminDashboard = () => {

  
  return (
    <>
   <SideBarAdmin/>

    <div>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{marginTop:'100px',marginLeft:'250px'}}>
        <Grid item xs={5}>
          
        <Typography variant="h5" gutterBottom style={{textAlign:'center'}}>Project Details</Typography>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Project Topic</StyledTableCell>
            
            <StyledTableCell style={{color:'black'}} align="right">.</StyledTableCell>
            <StyledTableCell style={{color:'black'}}  align="right">.</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>

              <StyledTableCell>  <button style={{  margin:'5px', padding:'5px',fontSize:'12px',backgroundColor:'black',color:'white'} }>EDIT</button></StyledTableCell>
              <StyledTableCell>  <button style={{  margin:'5px', padding:'5px',fontSize:'12px',backgroundColor:'black',color:'white'} }>DELETE</button></StyledTableCell>
              
             
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div style={{textAlign:'center'}}><button style={{  margin:'5px', padding:'5px',fontSize:'14px',backgroundColor:'black',color:'white'} }>ADD PROJECT TOPIC</button> </div>
        </Grid>



        <Grid item xs={5}>
          <Typography variant="h5" gutterBottom style={{textAlign:'center'}}>Mentor Details</Typography>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone Number</StyledTableCell>
            <StyledTableCell style={{color:'black'}}align="right">hi</StyledTableCell>
            <StyledTableCell style={{color:'black'}} align="right">hi</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
            
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell>  <button style={{  margin:'5px', padding:'5px',fontSize:'12px',backgroundColor:'black',color:'white'} }>EDIT</button></StyledTableCell>
              <StyledTableCell>  <button style={{  margin:'5px', padding:'5px',fontSize:'12px',backgroundColor:'black',color:'white'} }>DELETE</button></StyledTableCell>
              </StyledTableRow>
          ))}
        </TableBody>

      
      </Table>
      
    </TableContainer>
    <div style={{textAlign:'center'}}><button style={{  margin:'5px', padding:'5px',fontSize:'14px',backgroundColor:'black',color:'white'} }>ADD MENTOR</button> 

</div>
        </Grid>
        
      </Grid>
    </Box>


    </div>
    <AdminFooter/>
    </>
  )
}

export default AdminDashboard