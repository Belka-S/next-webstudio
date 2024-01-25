import H2 from '@/components/ui/Typography/H2';
import { Section } from '@/components/ui/Section';
import SvgIcon from '@/components/ui/SvgIcon';

import data from './customers.json';
import s from './Customers.module.scss';

const Customers = () => {
  return (
    <Section className="container">
      <H2 className={s.customers__title}>Regular customers</H2>
      <ul className={s.customers__list}>
        {data.map(el => (
          <li className={s.customers__item} key={el.svgId}>
            <a
              className={s.customers__link}
              href={el.href}
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              <SvgIcon id={el.svgId} width={110} height={60} />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Customers;
