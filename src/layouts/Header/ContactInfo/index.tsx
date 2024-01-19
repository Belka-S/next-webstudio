import React from 'react';

import ContactLink from '@/components/ContactLink';
import IconSvg from '@/components/ui/IconSvg';
import { IContactData } from '@/utils/constants/contactData';

import s from './ContactInfo.module.scss';

const contacts: Partial<keyof IContactData>[] = ['mail', 'phone'];

const ContactInfo = () => {
  return (
    <div className={s.contact}>
      {contacts.map(el => (
        <ContactLink className={s.contact__link} source={el} key={el}>
          <IconSvg className={s.contact__icon} svgId={`contact-${el}`} />
        </ContactLink>
      ))}
    </div>
  );
};

export default ContactInfo;
