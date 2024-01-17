'use client';

import classNames from 'classnames';
import React from 'react';

import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Typo } from '@/components/ui/Typo';

import s from './Hero.module.scss';

const Hero = () => {
  return (
    <Section className={classNames('container', s.hero)}>
      <Typo className={s.hero__titel} el="h1" fontWeight={700}>
        Effective solutions for your business
      </Typo>
      <Button
        className={s.hero__button}
        size="m"
        label="Order"
        onClick={() => console.log('qwe')}
      />
    </Section>
  );
};

export default Hero;
