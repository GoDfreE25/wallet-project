import React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import s from './sidebar-menu.module.scss';
import logo from '../../../../image/logo.svg';

const { Sider } = Layout;

const items: MenuProps['items'] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

export const SidebarMenu = () => {
  return (
    <Sider className={s.sider} theme="light">
      <header className={s.header}>
        <div className={s.header_title_container}>
          <img className={s.header_logo} src={logo} alt="logo" />
          <span className={s.header_title}>
            Rewards
            <br />
            Made
            <br />
            Easy
          </span>
        </div>
      </header>
      <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} items={items} />
    </Sider>
  );
};
