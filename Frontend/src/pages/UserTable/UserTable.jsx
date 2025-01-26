import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { GetReq } from '../../api/axios.js';

const UserTable = () => {

  const [isData, SetData] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetReq("/User");
        const AllData = response?.data?.data;
        console.log(AllData);
        SetData(AllData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function
  }, []);

  // Approve and Reject handler functions
  const handleApprove = (userId) => {
    console.log('Approved User ID:', userId);
    // Call the API to approve the user or perform any other action
  };

  const handleReject = (userId) => {
    console.log('Rejected User ID:', userId);
    // Call the API to reject the user or perform any other action
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><strong>Name</strong></TableCell>
            <TableCell align="center"><strong>CNIC</strong></TableCell>
            <TableCell align="center"><strong>Father's Name</strong></TableCell>
            <TableCell align="center"><strong>Purpose</strong></TableCell>
            <TableCell align="center"><strong>Actions</strong></TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {isData.map((item, index) => (
            <TableRow key={index}>
              <TableCell align="center">{item.Username}</TableCell>
              <TableCell align="center">{item.CNIC}</TableCell>
              <TableCell align="center">{item.FatherName}</TableCell>
              <TableCell align="center">{item.Purpose}</TableCell>
              <TableCell align="center">
                
                <div style={{ display: 'inline-flex', gap: '10px' }}>
               
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"  // Small button
                    // onClick={() => handleApprove(item.UserId)} 
                  >
                    Approve
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"  // Small button
                    // onClick={() => handleReject(item.UserId)} 
                  >
                    Reject
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;