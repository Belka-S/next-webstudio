import Image from 'next/image';

import ContactLink from '@/components/ui/ContactLink';
import H2 from '@/components/ui/Typography/H2';
import H5 from '@/components/ui/Typography/H5';
import { Section } from '@/components/ui/Section';
import SvgIcon from '@/components/ui/SvgIcon';
import { IContactData } from '@/utils/constants/contactData';
import images from '@/utils/context/ourteamContext';

import data from './ourteam.json';
import s from './OurTeam.module.scss';

const socials: Partial<keyof IContactData>[] = [
  'whatsapp',
  'linkedin',
  'facebook',
  'twitter', // 'instagram',
];

const OurTeam = () => (
  <Section className={s.ourteam}>
    <div className="container">
      <H2 className={s.ourteam__title}>Our team</H2>
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
              <H5 fontWeight={500} className={s.ourteam__member}>
                {data[img.id].name}
              </H5>
              <Typo el="p" fontWeight={400} className={s.ourteam__position}>
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
