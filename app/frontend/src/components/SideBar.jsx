import React, { useContext } from 'react';
import UserInfoContext from '../context/UserInfoContext';

function SideBar() {
  const { userName } = useContext(UserInfoContext);

  return (
    <div className="sidebar bg-blue-500 text-white p-4 text-center h-screen">
      <div className="logo text-center mb-4">
        <img src="https://i.ibb.co/BrM33Cg/Design-sem-nome.png" className="ml-1 " alt="Logo" width={100} />
      </div>
      <div className="username text-center">
        <p>{userName}</p>
      </div>
      <nav className="navbar mt-4">
        <ul>
          <li><a href="#" className="block py-2 hover:bg-blue-600">Home</a></li>
          <li><a href="#" className="block py-2 hover:bg-blue-600">Entrada</a></li>
          <li><a href="#" className="block py-2 hover:bg-blue-600">Saida</a></li>
          <li><a href="#" className="block py-2 hover:bg-blue-600">Page 4</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
