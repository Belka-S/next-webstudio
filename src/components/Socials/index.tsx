import { FC } from 'react';

import ContactLink, { ContactLinkVariant } from '@/components/ui/ContactLink';
import SvgIcon from '@/components/ui/SvgIcon';
import { IContactData } from '@/utils/constants/contactData';

import s from './Socials.module.scss';

const socials: Partial<keyof IContactData>[] = [
  'instagram',
  'twitter',
  'facebook',
  'linkedin',
];

interface ISocialsProps {
  variant?: ContactLinkVariant;
  styleSocials?: string;
  styleLink?: string;
}

const Socials: FC<ISocialsProps> = ({ variant, styleSocials, styleLink }) => {
  return (
    <div className={styleSocials ? styleSocials : s.socials}>
      {socials.map(el => (
        <ContactLink
          key={el}
          className={styleLink ? styleLink : s.socials__link}
          variant={variant ? variant : 'short'}
          source={el}
          target="_blank"
        >
          <SvgIcon id={`contact-${el}`} width={28} height={28} />
        </ContactLink>
      ))}
    </div>
  );
};

export default Socials;
