import React from 'react';

import ContactLink from '@/components/ContactLink';
import IconSvg from '@/components/ui/IconSvg';

import s from './ContactInfo.module.scss';

const ContactInfo = () => {
  return (
    <div className={s.contact}>
      <ContactLink className={s.contact__link} source={'mail'}>
        <IconSvg className={s.contact__icon} svgId="contact-mail" />
      </ContactLink>

      <ContactLink className={s.contact__link} source={'phone'}>
        <IconSvg className={s.contact__icon} svgId="contact-phone" />
      </ContactLink>
    </div>
  );
};

export default ContactInfo;
