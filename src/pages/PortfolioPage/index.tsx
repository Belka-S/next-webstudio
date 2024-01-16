import classNames from 'classnames';

import { Section } from '@/components/Section';

import s from './PortfolioPage.module.scss';

const PortfolioPage = () => {
  return (
    <Section className={classNames(s.portfolio, 'container')}>
      <h1>Portfolio Page</h1>
    </Section>
  );
};

export default PortfolioPage;
