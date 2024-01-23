import React, { FC } from 'react';

import ContactLink from '@/components/ui/ContactLink';
import SvgIcon from '@/components/ui/SvgIcon';
import { IContactData } from '@/utils/constants/contactData';

import s from './ContactInfo.module.scss';

interface IContactInfoProps {
  styleInfo?: string;
  styleLink?: string;
}

const contacts: Partial<keyof IContactData>[] = ['mail', 'phone'];

const ContactInfo: FC<IContactInfoProps> = ({ styleInfo, styleLink }) => {
  return (
    <div className={styleInfo ? styleInfo : s.contacts}>
      {contacts.map(el => (
        <ContactLink
          className={styleLink ? styleLink : s.contacts__link}
          source={el}
          key={el}
        >
          <SvgIcon id={`contact-${el}`} className={s.contacts__icon} />
        </ContactLink>
      ))}
    </div>
  );
};

export default ContactInfo;
