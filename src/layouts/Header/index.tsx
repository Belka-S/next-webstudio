import classNames from 'classnames';
import Link from 'next/link';

import Logo from '@/components/Logo';

import s from './Header.module.scss';
import SiteNav from './SiteNav';

const Header = () => {
  return (
    <header className={classNames(s.header, 'container')}>
      <Link href={'/'}>
        <Logo className={s.header__logo} />
      </Link>
      <SiteNav />
    </header>
  );
};

export default Header;
