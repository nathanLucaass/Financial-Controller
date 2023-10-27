import React, { useContext, useEffect } from 'react';
import SideBar from '../components/SideBar';
import { getAllBills } from '../services/billsService';
import { getAllEarnings } from '../services/earningsService';
import UserInfoContext from '../context/UserInfoContext';
import DailyResume from '../components/DailyResume';
import TotalResume from '../components/TotalResume';

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
    <div className="flex relative bg-slate-100">
        <SideBar className="fixed h-full" />
      <div className="flex relative">
        <div className="w-full p-4">
          <DailyResume />
        </div>
        <div className="w-full p-4">
          <TotalResume />
        </div>
      </div>
    </div>
  );
}

export default Home;
