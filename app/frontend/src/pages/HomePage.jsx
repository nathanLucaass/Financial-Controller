import React, { useContext, useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import getAllBills from '../services/billsService';
import UserInfoContext from '../context/UserInfoContext';

function Home() {
  const { userId } = useContext(UserInfoContext);
  const { bills, setBills } = useContext(UserInfoContext);

  useEffect(() => {
    async function fetchData() {
      const response = await getAllBills(userId);
      console.log(response);
      setBills(response);
    }

    fetchData();
  }, [setBills]);

  return (
    <div>
      <h1>hello</h1>
      <SideBar />
    </div>
  );
}

export default Home;
