import classNames from 'classnames';

import { Section } from '@/components/ui/Section';

import s from './PortfolioPage.module.scss';

const PortfolioPage = () => {
  return (
    <Section className={classNames('container', s.portfolio)}>
      <h1>Portfolio Page</h1>
    </Section>
  );
};

export default PortfolioPage;
