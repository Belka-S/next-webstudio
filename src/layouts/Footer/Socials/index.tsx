import ContactLink from '@/components/ContactLink';
import IconSvg from '@/components/ui/IconSvg';
import { Typo } from '@/components/ui/Typo';
import { IContactData } from '@/utils/constants/contactData';

import s from './Socials.module.scss';

const socials: Partial<keyof IContactData>[] = [
  'instagram',
  'twitter',
  'facebook',
  'linkedin',
];

const Socials = () => {
  return (
    <div className={s.socials}>
      <Typo el="p" fontWeight={700}>
        Join
      </Typo>
      <div className={s.socials__wrap}>
        {socials.map(el => (
          <ContactLink
            key={el}
            className={s.socials__link}
            variant="short"
            source={el}
            target="_blank"
          >
            <IconSvg svgId={`contact-${el}`} width={28} height={28} />
          </ContactLink>
        ))}
      </div>
    </div>
  );
};

export default Socials;
