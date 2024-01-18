import IconSvg from '@/components/ui/IconSvg';
import { Section } from '@/components/ui/Section';
import { advantageData } from '@/utils/constants/advantageData';

import s from './Advantages.module.scss';

const Advantages = () => {
  return (
    <Section className="container">
      <h2 className="hidden">Our advantages</h2>
      <ul className={s.advantages}>
        {advantageData.map(el => (
          <li className={s.advantages__item} key={el.svgId}>
            <div className={s.advantages__wrap}>
              <IconSvg svgId={el.svgId} width={70} height={70} />
            </div>
            <h3 className={s.advantages__title}>{el.title}</h3>
            <p className={s.advantages__value}>{el.value}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Advantages;
