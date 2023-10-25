/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function SideBar() {
  return (
    <div className="sidebar bg-blue-500 text-white p-4 text-center h-screen">
      <div className="logo text-center mb-4">
        <img src="https://i.ibb.co/0FVRL61/Financial.png" alt="Logo" width={100} />
      </div>
      <div className="username text-center">
        <p>username</p>
      </div>
      <nav className="navbar mt-4">
        <ul>
          <li><a href="#" className="block py-2 hover:bg-blue-600">Page 1</a></li>
          <li><a href="#" className="block py-2 hover:bg-blue-600">Page 2</a></li>
          <li><a href="#" className="block py-2 hover:bg-blue-600">Page 3</a></li>
          <li><a href="#" className="block py-2 hover:bg-blue-600">Page 4</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
