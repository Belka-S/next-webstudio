import classNames from 'classnames';
import Image from 'next/image';

import { Section } from '@/components/ui/Section';
import { Typo } from '@/components/ui/Typo';
import images from '@/utils/context/aboutusContext';

import s from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <Section className={classNames(s.aboutus, 'container')}>
      <Typo className={s.aboutus__titel} el="h2" fontWeight={700}>
        What do we do
      </Typo>

      <ul className={s.aboutus__list}>
        {images.map(el => (
          <li className={s.aboutus__item} key={el.id}>
            <Typo className={s.aboutus__text} el="p" fontWeight={700}>
              {el.name.replace('-', ' ')}
            </Typo>

            <Image
              src={el.file}
              sizes="(min-width: 2440px) 740px, calc(31.6vw - 25px)"
              alt={el.name}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default AboutUs;
