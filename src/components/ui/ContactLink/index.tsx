import { FC, ReactNode } from 'react';

import { contactData, IContactData } from '@/utils/constants/contactData';

export type ContactLinkVariant = 'short' | 'full' | 'title';

interface IContactLinkProps {
  className?: string;
  source: keyof IContactData;
  variant?: ContactLinkVariant;
  href?: string;
  target?: '_blank';
  children?: ReactNode;
}

const ContactLink: FC<IContactLinkProps> = ({
  className,
  source,
  variant = 'full',
  href,
  target,
  children,
}) => {
  const { title, label, link } = contactData[source];

  return (
    <a
      className={className}
      href={href ? href : link}
      target={target}
      aria-label={title}
      rel="noopener noreferrer nofollow"
    >
      {children}
      {variant === 'title' && title}
      {variant === 'full' && label}
    </a>
  );
};

export default ContactLink;
