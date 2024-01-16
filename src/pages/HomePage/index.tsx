import classNames from 'classnames';

import { Section } from '@/components/Section';

import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <Section className={classNames(s.home, 'container')}>
      <h1>Home Page</h1>
    </Section>
  );
};

export default HomePage;
