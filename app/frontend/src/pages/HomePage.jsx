import React, { useContext, useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import getAllBills from '../services/billsService';
import UserInfoContext from '../context/UserInfoContext';
import DailyResume from '../components/DailyResume';

function Home() {
  const { userId } = useContext(UserInfoContext);
  const { setBills, isLoading, setIsLoading } = useContext(UserInfoContext);

  useEffect(() => {
    async function fetchData() {
      const response = await getAllBills(userId);
      setBills(response);
      setIsLoading(false);
    }

    fetchData();
  }, [setBills]);

  return (
    <div>
      <h1>hello</h1>
      <SideBar />
      <DailyResume />
    </div>
  );
}

export default Home;
