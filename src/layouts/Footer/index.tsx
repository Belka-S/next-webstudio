import classNames from 'classnames';

import Address from './Address';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classNames('container', s.footer)}>
      <Address />
    </footer>
  );
};

export default Footer;
