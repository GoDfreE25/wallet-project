import { PropsWithChildren, useEffect, useState } from 'react';
import s from '../authorized-layout/authorize-layout.module.scss';

type Props = PropsWithChildren<{}>;

export const AuthorizeLayoutWrapper = ({ children }: Props) => {
  const [isDisabledTransition, setIsDisabledTransition] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsDisabledTransition(false);
    }, 700);
  }, []);

  return (
    <div className={s.wrapper}>
      <header className={`${s.header}`}>Header</header>
      <aside className={`${s.aside} ${isDisabledTransition ? s.no_transition : ''}`}>Sidebar</aside>
      <div className={`${s.content}`}>{children}</div>
    </div>
  );
};
