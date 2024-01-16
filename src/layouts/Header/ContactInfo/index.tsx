import Image from 'next/image';
import React from 'react';

import IconSvg from '@/components/IconSvg';

import s from './ContactInfo.module.scss';

const ContactInfo = () => {
  return (
    <div className={s.contacts}>
      <a
        className={s.contacts__link}
        href="mailto:info@devstudio.com"
        aria-label="Mail"
      >
        <IconSvg className={s.contacts__icon} svgId="contactMail" />
        info@devstudio.com
      </a>

      <a
        className={s.contacts__link}
        href="tel:+380961111111"
        aria-label="Phone"
      >
        <IconSvg className={s.contacts__icon} svgId="contactPhone" />
        +38 096 111 11 11
      </a>
    </div>
  );
};

export default ContactInfo;
