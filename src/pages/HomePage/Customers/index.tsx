import { Section } from '@/components/ui/Section';
import SvgIcon from '@/components/ui/SvgIcon';
import { Typo } from '@/components/ui/Typo';

import data from './customers.json';
import s from './Customers.module.scss';

const Customers = () => {
  return (
    <Section className="container">
      <Typo className={s.customers__title} el="h2" fontWeight={700}>
        Regular customers
      </Typo>
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
