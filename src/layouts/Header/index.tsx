import classNames from 'classnames';
import Link from 'next/link';

import Logo from '@/components/Logo';
import { Button } from '@/components/ui/Button';
import SvgIcon from '@/components/ui/SvgIcon';

import ContactInfo from './ContactInfo';
import s from './Header.module.scss';
import SiteNav from './SiteNav';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={classNames('container', s.header__wrap)}>
        <Link href={'/'}>
          <Logo className={s.header__logo} />
        </Link>

        <SiteNav />
        <ContactInfo />

        <Button className={s.header__button} size="m" variant="transparent">
          <SvgIcon id="modal-burger" width={40} height={40} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
