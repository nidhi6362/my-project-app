import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
      <Menu.Item key="1">
        <Link to="/">Product Details</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/my-profile">My Profile</Link>
      </Menu.Item>
    </Menu>
  );
};
export default Sidebar;