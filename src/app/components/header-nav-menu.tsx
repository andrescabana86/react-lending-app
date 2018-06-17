import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import 'antd/lib/menu/style/css';

import './header-nav-menu.css';

export const HeaderNavMenu:React.SFC<any> = (props) => {
  return (
    <Menu theme="dark"
      selectedKeys={[props.currentLocation]}
      mode="horizontal"
      className="header-nav-menu__container">
      <Menu.Item key="/scoring"><Link to="/scoring">Solicitar Prestamo</Link></Menu.Item>
      <Menu.Item key="/list"><Link to="/list">Listado</Link></Menu.Item>
    </Menu>
  );
};
