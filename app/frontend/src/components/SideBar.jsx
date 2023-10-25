import React from 'react';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <div className="username">
        <p>username</p>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#">Page 1</a></li>
          <li><a href="#">Page 2</a></li>
          <li><a href="#">Page 3</a></li>
          <li><a href="#">Page 4</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
