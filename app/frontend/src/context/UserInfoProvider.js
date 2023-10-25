import UserInfoContext from "./UserInfoContext";
import { useState } from "react";

const UserInfoProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [bills, setBills] = useState(null);
  const [earnings, setEarnings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <UserInfoContext.Provider value={{ userId, setUserId, userToken, setUserToken, bills, setBills, isLoading, setIsLoading, earnings, setEarnings }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoProvider;