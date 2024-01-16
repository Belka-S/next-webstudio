import classNames from 'classnames';
import Link from 'next/link';

import Logo from '@/components/Logo';

import ContactInfo from './ContactInfo';
import s from './Header.module.scss';
import SiteNav from './SiteNav';

const Header = () => {
  return (
    <header className={classNames('container', s.header)}>
      <Link href={'/'}>
        <Logo className={s.header__logo} />
      </Link>
      <SiteNav />
      <ContactInfo />
    </header>
  );
};

export default Header;
