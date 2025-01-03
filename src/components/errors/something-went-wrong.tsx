import s from './something-went-wrong.module.scss';

export const SomethingWentWrong = () => {
  return (
    <div className={s.container}>
      <span className={s.title}>Ooops!</span>
      <span className={s.text}>Something went wrong</span>
    </div>
  );
};
