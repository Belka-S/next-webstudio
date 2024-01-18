import { FC, ReactNode } from 'react';

import { contactData, IContactData } from '@/utils/constants/contactData';

interface IContactLinkProps {
  className?: string;
  source: keyof IContactData;
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
