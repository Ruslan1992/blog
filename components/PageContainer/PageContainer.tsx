import cls from './PageContainer.module.scss';

type PropsType = {
  children: React.ReactNode;
};

export const PageContainer = ({ children }: PropsType) => (
  <div className={'container'}>
    <div className={cls.PageContainer}>{children}</div>
  </div>
);
