'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import s from './SiteNav.module.scss';

const SiteNav = () => {
  const pathname = usePathname();

  const setClassName = (path: string) => {
    return classNames(s.nav__link, pathname === path && s.active);
  };

  return (
    <nav className={s.nav}>
      <Link className={setClassName('/')} href={'/'}>
        Studio
      </Link>
      <Link className={setClassName('/portfolio')} href={'/portfolio'}>
        Portfolio
      </Link>
      <Link className={setClassName('/contact')} href={'/contact'}>
        Contact
      </Link>
    </nav>
  );
};

export default SiteNav;
