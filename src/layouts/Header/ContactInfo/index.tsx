import Image from 'next/image';
import React from 'react';

import ContactLink from '@/components/ContactLink';
import IconSvg from '@/components/ui/IconSvg';

import s from './ContactInfo.module.scss';

const ContactInfo = () => {
  return (
    <div className={s.contacts}>
      <ContactLink className={s.contacts__link} type={'mail'}>
        <IconSvg className={s.contacts__icon} svgId="contactMail" />
      </ContactLink>

      <ContactLink className={s.contacts__link} type={'phone'}>
        <IconSvg className={s.contacts__icon} svgId="contactPhone" />
      </ContactLink>
    </div>
  );
};

export default ContactInfo;
