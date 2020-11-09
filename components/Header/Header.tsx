import { Navbar } from 'components/Navbar/Navbar';
import cls from './Header.module.scss';

export const Header = () => (
  <header className={cls.Header}>
    <div className={cls.logo}>
      <img src='/logo.svg' alt='Ruslan Andreichikov' />
    </div>
    <Navbar />
  </header>
);
