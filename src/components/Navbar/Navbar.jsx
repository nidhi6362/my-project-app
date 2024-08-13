import React from 'react';
import { Avatar } from 'antd';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">My Webpage</div>
      <Avatar src="https://via.placeholder.com/40" />
    </div>
  );
};

export default Navbar;