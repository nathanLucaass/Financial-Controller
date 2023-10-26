import { useState } from 'react';
import UserInfoContext from './UserInfoContext';

function UserInfoProvider({ children }) {
  const [userId, setUserId] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [bills, setBills] = useState(null);
  const [earnings, setEarnings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <UserInfoContext.Provider value={{
      userId, setUserId, userToken, setUserToken, bills, setBills, isLoading, setIsLoading, earnings, setEarnings,
    }}
    >
      {children}
    </UserInfoContext.Provider>
  );
}

export default UserInfoProvider;
