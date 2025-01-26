import React from 'react';
import LoanForm from '../LoanForm/LoanForm';
import Banner from '../Banner/Banner';
import UserDashboard from '../UserDashboard/UserDashboard'
import { ToastContainer } from 'react-toastify';


const Home = () => {
  return (
    <>
    <UserDashboard/>
 <Banner/>
 <ToastContainer />
 
 </>
  );
}

export default Home;