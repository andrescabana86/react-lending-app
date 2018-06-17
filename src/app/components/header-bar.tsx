import React from 'react';

import { Layout } from 'antd';
import 'antd/lib/layout/style/css';
import 'antd/lib/menu/style/css';
const { Header } = Layout;
import { HeaderNavMenu } from './header-nav-menu';

import './header-bar.css';

export const HeaderBar:React.SFC<any> = (props) => {
  return (
    <Header className="header-bar__container">
      <HeaderNavMenu currentLocation={props.location.pathname} />
    </Header>
  );
};
