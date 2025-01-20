import { PropsWithChildren, useEffect, useState } from 'react';
import s from '../authorized-layout/authorize-layout.module.scss';
import { Sidebar } from './component/sidebar/sidebar';
import { WalletHeader } from './component/header/header';

type Props = PropsWithChildren<{}>;

export const AuthorizeLayoutWrapper = ({ children }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const savedState = JSON.parse(window.localStorage.getItem('isMenuOpen'));
    if (savedState !== null) {
      setIsCollapsed(savedState);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('isMenuOpen', JSON.stringify(isCollapsed));
  }, [isCollapsed]);
  return (
    <div className={s.wrapper}>
      <header className={isCollapsed ? s.header_collapsed : s.header}>
        <WalletHeader isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </header>
      <aside className={s.aside}>
        <Sidebar isCollapsed={isCollapsed} />
      </aside>
      <div className={isCollapsed ? s.content_collapsed : s.content}>{children}</div>
    </div>
  );
};
