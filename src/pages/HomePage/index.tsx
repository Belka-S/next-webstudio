import classNames from 'classnames';

import { Section } from '@/components/ui/Section';

import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <Section className={classNames('container', s.home)}>
      <h1>Home Page</h1>
    </Section>
  );
};

export default HomePage;
