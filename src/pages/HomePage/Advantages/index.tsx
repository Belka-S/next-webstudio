import { Section } from '@/components/ui/Section';
import SvgIcon from '@/components/ui/SvgIcon';
import { Typo } from '@/components/ui/Typo';

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
            <Typo className={s.advantages__title} el={'h6'} fontWeight={700}>
              {el.title}
            </Typo>
            <Typo className={s.advantages__text} el={'p'} fontWeight={400}>
              {el.value}
            </Typo>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Advantages;
