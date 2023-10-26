import React, { useContext } from 'react';
import UserInfoContext from '../context/UserInfoContext';
import { useHistory } from 'react-router-dom';

function SideBar() {
  const { userName } = useContext(UserInfoContext);
  const history = useHistory();

  return (
    <div className="sidebar bg-blue-500 text-white p-4 text-center h-screen overflow-y-auto	 overflow-y-auto">
      <div className="logo text-center mb-4">
        <img src="https://i.ibb.co/BrM33Cg/Design-sem-nome.png" className="ml-1 " alt="Logo" width={100} />
      </div>
      <div className="username text-left mb-10">
        <p className='text-xl'>Olá</p>
        <p className='text-2xl'>{userName}</p>
      </div>
      <nav className="navbar mt-4 text-center">
        <ul>
          <li><a onClick={()=> history.push('/home')} className="block py-2 ml-2rounded-md hover:bg-blue-600 text-xl cursor-pointer mb-10">Home</a></li>
          <li><a onClick={()=> history.push('/earnings')} className="block py-2 rounded-mdhover:bg-blue-600 text-xl	cursor-pointer mb-10">Entrada</a></li>
          <li><a onClick={()=> history.push('/bills')} className="block py-2 rounded-md hover:bg-blue-600 text-xl cursor-pointer mb-10">Saida</a></li>
          <li><a onClick={()=> history.push('/')} className="block py-2 rounded-md hover:bg-blue-600 text-xl	cursor-pointer mb-10">Logoff</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
