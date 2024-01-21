import { Section } from '@/components/ui/Section';
import SvgIcon from '@/components/ui/SvgIcon';

import data from './customers.json';
import s from './Customers.module.scss';

const Customers = () => {
  return (
    <Section className="container">
      <h2 className={s.customers__title}>Regular customers</h2>
      <ul className={s.customers__list}>
        {data.map(el => (
          <li className={s.customers__item} key={el.svgId}>
            <a
              className={s.customers__link}
              href={el.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
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
