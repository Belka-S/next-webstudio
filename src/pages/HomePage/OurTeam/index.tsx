import Image from 'next/image';

import ContactLink from '@/components/ContactLink';
import { Section } from '@/components/ui/Section';
import SvgIcon from '@/components/ui/SvgIcon';
import { Typo } from '@/components/ui/Typo';
import { IContactData } from '@/utils/constants/contactData';
import images from '@/utils/context/ourteamContext';

import data from './ourteam.json';
import s from './OurTeam.module.scss';

const socials: Partial<keyof IContactData>[] = [
  'whatsapp',
  'linkedin',
  'facebook',
  'twitter',
  'instagram',
];

const OurTeam = () => (
  <Section className={s.ourteam}>
    <div className="container">
      <Typo className={s.ourteam__title} el="h2" fontWeight={700}>
        Our team
      </Typo>
      {/* image */}
      <ul className={s.ourteam__list}>
        {images.map(img => (
          <li className={s.ourteam__item} key={img.id}>
            <Image
              src={img.file}
              sizes="(min-width: 2440px) 740px, calc(31.6vw - 25px)"
              alt={data[img.id].name}
            />
            {/* socials */}
            <div className={s.ourteam__wrap}>
              <Typo className={s.ourteam__member} el="h5" fontWeight={500}>
                {data[img.id].name}
              </Typo>
              <Typo className={s.ourteam__position} el="p" fontWeight={400}>
                {data[img.id].position}
              </Typo>

              <div className={s.socials__wrap}>
                {socials.map(socials => (
                  <ContactLink
                    key={socials}
                    className={s.socials__link}
                    variant="short"
                    source={socials}
                    href={
                      Object.entries(data[img.id])
                        .filter(el => el[0] === socials)
                        .flatMap(el => el)[1]
                    }
                    target="_blank"
                  >
                    <SvgIcon id={`contact-${socials}`} width={28} height={28} />
                  </ContactLink>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export default OurTeam;
