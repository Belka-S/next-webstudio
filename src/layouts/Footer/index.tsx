import classNames from 'classnames';

import { Section } from '@/components/ui/Section';

import Address from './Address';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={classNames('container', s.footer__wrap)}>
        <Address />
      </div>
    </footer>
  );
};

export default Footer;
