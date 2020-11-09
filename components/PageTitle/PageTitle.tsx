import cls from './PageTitle.module.scss';

type PropsType = {
  shadow: string,
  children: React.ReactNode
}

export const PageTitle = ({shadow, children}:PropsType) => (
  <div className={cls.PageTitle}>
    <div className={cls.ShadowTitle}>{shadow}</div>
    <div className={cls.Title}>
      <h1>
        {children}
      </h1>
    </div>
  </div>
);
