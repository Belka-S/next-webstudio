import { FC, ReactNode } from 'react';

import { contactData } from './contactData';

interface IContactLinkProps {
  className?: string;
  source:
    | 'facebook'
    | 'github'
    | 'instagram'
    | 'linkedin'
    | 'mail'
    | 'map'
    | 'phone'
    | 'telegram'
    | 'twitter'
    | 'whatsapp';
  variant?: 'full' | 'short';
  children?: string | ReactNode;
}

const ContactLink: FC<IContactLinkProps> = ({
  className,
  source,
  variant = 'full',
  children,
}) => {
  const { title, label, href } = contactData[source];

  return (
    <a className={className} href={href} aria-label={title}>
      {children}
      {variant === 'full' && label}
    </a>
  );
};

export default ContactLink;
