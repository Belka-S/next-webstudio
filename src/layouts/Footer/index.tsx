import classNames from 'classnames';

import { Section } from '@/components/ui/Section';

import Address from './Address';
import s from './Footer.module.scss';
import Socials from './Socials';
import Subscribe from './Subscribe';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={classNames('container', s.footer__wrap)}>
        <Address />
        <Socials />
        <Subscribe />
      </div>
    </footer>
  );
};

export default Footer;
