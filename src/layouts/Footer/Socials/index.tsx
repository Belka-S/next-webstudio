import ContactLink from '@/components/ContactLink';
import IconSvg from '@/components/ui/IconSvg';
import { Typo } from '@/components/ui/Typo';

import s from './Socials.module.scss';

const Socials = () => {
  return (
    <div className={s.socials}>
      <Typo el="p" fontWeight={700}>
        Join
      </Typo>
      <div className={s.socials__wrap}>
        <ContactLink
          className={s.socials__link}
          variant="short"
          source="instagram"
        >
          <IconSvg svgId="contact-instagram" width={28} height={28} />
        </ContactLink>

        <ContactLink
          className={s.socials__link}
          variant="short"
          source="twitter"
        >
          <IconSvg svgId="contact-twitter" width={28} height={28} />
        </ContactLink>

        <ContactLink
          className={s.socials__link}
          variant="short"
          source="facebook"
        >
          <IconSvg svgId="contact-facebook" width={28} height={28} />
        </ContactLink>

        <ContactLink
          className={s.socials__link}
          variant="short"
          source="linkedin"
        >
          <IconSvg svgId="contact-linkedin" width={28} height={28} />
        </ContactLink>
      </div>
    </div>
  );
};

export default Socials;
