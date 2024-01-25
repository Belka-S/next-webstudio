import classNames from 'classnames';
import Image from 'next/image';

import H2 from '@/components/ui/Typography/H2';
import { Section } from '@/components/ui/Section';
import images from '@/utils/context/aboutusContext';

import s from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <Section className={classNames(s.aboutus, 'container')}>
      <H2 className={s.aboutus__title}>About Us</H2>

      <ul className={s.aboutus__list}>
        {images.map(el => (
          <li className={s.aboutus__item} key={el.id}>
            <Typo el="p" className={s.aboutus__text}>
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
