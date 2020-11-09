import Link from 'next/link';
import cls from './Navbar.module.scss';
import { useRouter } from "next/router";

export const NavLink = ({ children, path }) => {
  const { pathname } = useRouter();
  const classes = [cls.link]
  if (pathname === path) classes.push(cls.active)

  return (
    <Link href={path}>
      <a className={classes.join(' ')}>{children}</a>
    </Link>
  );
};