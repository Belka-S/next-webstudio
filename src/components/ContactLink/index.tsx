import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import s from './ContactLink.module.scss';
import { contacts } from './contacts';

interface IContactLinkProps {
  className?: string;
  type:
    | 'mail'
    | 'phone'
    | 'whatsApp'
    | 'telegram'
    | 'linkedIn'
    | 'gitHub'
    | 'map';
  children?: string | ReactNode;
}

const ContactLink: FC<IContactLinkProps> = ({ className, type, children }) => {
  const { title, label, href } = contacts[type];

  return (
    <a
      className={classNames(s[`${title}Contact`], className)}
      href={href}
      aria-label={title}
    >
      {children}
      {label}
    </a>
  );
};

export default ContactLink;
