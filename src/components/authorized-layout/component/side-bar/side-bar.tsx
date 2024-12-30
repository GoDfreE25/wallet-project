import React from 'react';
import { BarChartOutlined, ProfileOutlined, WalletOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import s from './sidebar-menu.module.scss';
import logo from '../../../../image/logo.svg';

const { Sider } = Layout;

const items: MenuProps['items'] = [
  {
    icon: BarChartOutlined,
    name: 'Dashboard',
  },
  {
    icon: WalletOutlined,
    name: 'Wallet',
  },
  {
    icon: ProfileOutlined,
    name: 'User profile',
  },
  {
    icon: SettingOutlined,
    name: 'Setting',
  },
].map((item, index) => ({
  key: String(index + 1),
  icon: React.createElement(item.icon),
  label: item.name,
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
      <Menu className={s.menu} theme="light" mode="inline" defaultSelectedKeys={['4']} items={items} />
    </Sider>
  );
};
