import classNames from 'classnames';

import Address from './Address';
import s from './Footer.module.scss';
import Join from './Join';
import Subscribe from './Subscribe';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={classNames('container', s.footer__wrap)}>
        <Address />
        <Join />
        <Subscribe />
      </div>
    </footer>
  );
};

export default Footer;
