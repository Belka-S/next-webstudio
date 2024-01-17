import Link from 'next/link';

import ContactLink from '@/components/ContactLink';
import Logo from '@/components/Logo';

import s from './Address.module.scss';

const Address = () => {
  return (
    <address className={s.address}>
      <Link href={'/'}>
        <Logo className={s.footer__logo} />
      </Link>

      <ContactLink className={s.address__link} source={'map'} />
      <ContactLink className={s.address__link} source={'mail'} />
      <ContactLink className={s.address__link} source={'phone'} />
    </address>
  );
};

export default Address;
