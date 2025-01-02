import { useEffect, useState } from 'react';
import { Button, Layout, Typography } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import s from './header.module.scss';

const { Title } = Typography;
const { Header } = Layout;

export const WalletHeader = ({
  isCollapsed,
  setIsCollapsed,
}: {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}) => {
  return (
    <Header className={s.header}>
      <div className={s.header_title_container}>
        <Button
          type="text"
          icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{
            width: 50,
            height: 50,
          }}
        />
        <Title level={4} style={{ margin: 0 }}>
          Dashboard
        </Title>
      </div>
      <Avatar size={40} icon={<UserOutlined />} />
    </Header>
  );
};
