import Link from 'next/link';

import s from './SiteNav.module.scss';

const SiteNav = () => {
 return (
  <nav className={s.nav}>
   <Link className={s.nav__link} href={'/'}>
    Studio
   </Link>
   <Link
    className={s.nav__link}
    href={'/portfolio'}
   >
    Portfolio
   </Link>
   <Link
    className={s.nav__link}
    href={'/contact'}
   >
    Contact
   </Link>
  </nav>
 );
};

export default SiteNav;
