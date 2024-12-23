import s from './sidebar-menu.module.scss';
import logo from '../../../../image/Logo.jpeg';

export const SidebarMenu = () => {
  return (
    <div className={s.menu_container}>
      <div className={s.menu_wrapper}>
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
        <div className={s.body}>
          <div className={s.scrollable_content}>
            <div className={s.item_list}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
