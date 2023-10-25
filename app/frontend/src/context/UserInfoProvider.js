import UserInfoContext from "./UserInfoContext";
import { useState } from "react";

const UserInfoProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userToken, setUserToken] = useState(null);

  return (
    <UserInfoContext.Provider value={{ userId, setUserId, userToken, setUserToken }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoProvider;