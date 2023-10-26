import React, { useContext, useEffect } from 'react';
import SideBar from '../components/SideBar';
import getAllBills from '../services/billsService';
import getAllEarnings from '../services/earningsService';
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
    <div className="relative bg-slate-100">
      <h1 className='text-center text-4xl bg-white text-blue-500 shadow font-medium'>Visão Geral</h1>
      <div className="flex relative">
        <SideBar className="fixed h-full" />
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
