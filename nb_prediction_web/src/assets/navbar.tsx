import React from 'react';
import {  Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
// import logo from '../../assets/logo/chou.png';
// import '../../global.css';

const { Header } = Layout;

const Navbar: React.FC = () => {
  return (
    <Header className='navbar'>
      <div className="logo-container">
        {/* <img src={logo} alt="Logo" className="logo-image"/> */}
        <span className="logo-text">Naive Bayes</span>
      </div>
      <div className="menu-container">
      <Menu theme="light" mode="horizontal" className="menu" selectedKeys={[]}>
        <Menu.Item key="home" className="menu-item">
            <Link to="/">Homepage</Link>
        </Menu.Item>
      </Menu>
      </div>
    </Header>
  );
};

export default Navbar;
