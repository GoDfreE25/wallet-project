import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChartOutlined, ProfileOutlined, WalletOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import s from './sidebar.module.scss';
import logo from '../../../../image/logo.svg';

const { Sider } = Layout;

const items: MenuProps['items'] = [
  {
    icon: BarChartOutlined,
    name: 'Dashboard',
    key: '/dashboard',
  },
  {
    icon: WalletOutlined,
    name: 'Wallet',
    key: '/wallet',
  },
  {
    icon: ProfileOutlined,
    name: 'User profile',
    key: '/userProfile',
  },
  {
    icon: SettingOutlined,
    name: 'Setting',
    key: '/setting',
  },
].map((item) => ({
  key: item.key,
  icon: React.createElement(item.icon),
  label: item.name,
}));

export const Sidebar = ({ isCollapsed }: { isCollapsed: boolean }) => {
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    if (key) {
      navigate(key);
    }
  };
  return (
    <Sider className={s.sider} theme="light" collapsed={isCollapsed}>
      <header className={s.header}>
        <div className={s.header_title_container}>
          <img className={s.header_logo} src={logo} alt="logo" />
          {!isCollapsed && (
            <span className={s.header_title}>
              Rewards
              <br />
              Made
              <br />
              Easy
            </span>
          )}
        </div>
      </header>
      <Menu
        className={s.menu}
        theme="light"
        mode="inline"
        defaultSelectedKeys={['/dashboard']}
        items={items}
        onClick={handleMenuClick}
      />
    </Sider>
  );
};
