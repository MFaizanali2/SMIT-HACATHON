import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import {CircularProgress } from '@mui/material';
import CustomLoader from '../../Utils/Constant/CustomLoader/CustomLoader';





const Banner = () => {
 
  const navigate = useNavigate();

  const [loading,Setloading]= useState(false)


  useEffect(()=>{
    setTimeout(() => {
      Setloading(true); 
    }, 2000);

  },[])


  return (
    <>
    {
      loading ?  
    <><Box
            sx={{
              height: '400px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#fff',
              position: 'relative',
              px: 2,
            }}
          >
            {/* Content */}
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  fontFamily: 'Roboto, sans-serif',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                }}
              >
                Saylani Loan Application
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 4,
                  maxWidth: '600px',
                  mx: 'auto',
                  fontFamily: 'Roboto, sans-serif',
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
                }}
              >
                Apply for quick and easy loans at your fingertips.
              </Typography>
              <Button onClick={() => navigate('/LoanForm')}
                variant="contained"
                color="primary"
                size="small"
                sx={{
                  width: '250px',
                  px: 4,
                  py: 1.5,
                  borderRadius: '25px',
                  fontSize: '1rem',
                  backgroundColor: '#242535',
                  '&:hover': { backgroundColor: '#4caf50', color: "black" },
                }}
              >
                Apply for Loan
              </Button>
            </Box>
            
          </Box></>
     :  (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CustomLoader/>
      </Box>
    )
  }


    </>
    
   
  );
};


export default Banner;
