import H6 from '@/components/ui/Typography/H6';
import P from '@/components/ui/Typography/P';
import { Section } from '@/components/ui/Section';
import SvgIcon from '@/components/ui/SvgIcon';

import data from './advantages.json';
import s from './Advantages.module.scss';

const Advantages = () => {
  return (
    <Section className="container">
      <h2 className="hidden">Our advantages</h2>
      <ul className={s.advantages}>
        {data.map(el => (
          <li className={s.advantages__item} key={el.svgId}>
            <div className={s.advantages__wrap}>
              <SvgIcon id={el.svgId} width={70} height={70} />
            </div>
            <H6 className={s.advantages__title}>{el.title}</H6>
            <P fontWeight={400} className={s.advantages__text}>
              {el.value}
            </P>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Advantages;
