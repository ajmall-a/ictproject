import React from 'react'

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="white" style={{textAlign:'center'}}>
      {'Copyright © '}
      <Link color="inherit" href="https://ictkerala.org/">
      ICT ACADEMY OF KERALA  
      </Link>{'        '}
    
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const AdminFooter = () => {
  return (
    
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 4,
            mt: 'auto',
            backgroundColor:'black', 
            position:'relative',
          
}
          }
        >
          <Container maxWidth="sm">
           
            <Copyright />
          </Container>
        </Box>
      </Box>
   
  );
}




export default AdminFooter