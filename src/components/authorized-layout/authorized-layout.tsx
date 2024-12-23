import { PropsWithChildren } from 'react';
import s from '../authorized-layout/authorize-layout.module.scss';
import { SidebarMenu } from './component/side-bar/side-bar';

type Props = PropsWithChildren<{}>;

export const AuthorizeLayoutWrapper = ({ children }: Props) => {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>Header</header>
      <aside className={s.aside}>
        <SidebarMenu />
      </aside>
      <div className={`${s.content}`}>{children}</div>
    </div>
  );
};
