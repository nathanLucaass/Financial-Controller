import React, { useContext, useEffect } from 'react';
import SideBar from '../components/SideBar';
import getAllBills from '../services/billsService';
import getAllEarnings from '../services/earningsService';
import UserInfoContext from '../context/UserInfoContext';
import DailyResume from '../components/DailyResume';

function Home() {
  const { userId } = useContext(UserInfoContext);
  const {
    setBills, setEarnings, setIsLoading,
  } = useContext(UserInfoContext);

  useEffect(() => {
    async function fetchData() {
      const responseBills = await getAllBills(userId);
      const responseEarnings = await getAllEarnings(userId);
      setBills(responseBills);
      setEarnings(responseEarnings);
      setIsLoading(false);
    }

    fetchData();
  }, [setBills]);

  return (
    <div className="flex">
      <SideBar />
      <div className="w-full p-4">
        <DailyResume />
      </div>
    </div>
  );
}

export default Home;
