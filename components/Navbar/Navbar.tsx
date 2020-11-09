import { NavLink } from './NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cls from './Navbar.module.scss';
import { getWindowWidth } from 'helpers/getWindowWidth';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const windowWidth = getWindowWidth(992);
  const headerClasses = [cls.header];
  const [navOpen, setNavOpen] = useState(false);
  if (!windowWidth) headerClasses.push(cls.mobile);
  if (!windowWidth && navOpen) {
    headerClasses.push(cls.show);
  } else {
    headerClasses.push(cls.hide);
  }

  function onHandlerToggle() {
    setNavOpen((prevNavOpen) => !prevNavOpen);
    console.log(navOpen);
  }

  function closeNav(event) {
    const link = event.target.closest(`.${cls.link}`);
    if (!link) return;
    setNavOpen(false);
  }

  return (
    <header className={headerClasses.join(' ')}>
      {!windowWidth && (
        <div className={cls.toggle} onClick={onHandlerToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      <nav className={cls.nav} onClick={closeNav}>
        <NavLink path='/'>
          <FontAwesomeIcon icon='home' />
          <span>Home</span>
        </NavLink>
        <NavLink path='/resume'>
          <FontAwesomeIcon icon='user' />
          <span>About</span>
        </NavLink>
        <NavLink path='/portfolio'>
          <FontAwesomeIcon icon='briefcase' />
          <span>Portfolio</span>
        </NavLink>
        {/* <NavLink path='/blog'>
        <span>Blog</span>
      </NavLink> */}
        <NavLink path='/contact'>
          <FontAwesomeIcon icon='envelope-open' />
          <span>Contact</span>
        </NavLink>
      </nav>
    </header>
  );
};
