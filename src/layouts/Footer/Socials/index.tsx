import { Typo } from '@/components/ui/Typo';

import s from './Socials.module.scss';

const Socials = () => {
  return (
    <div className={s.socials}>
      <Typo className={s.socials__title} el="p" fontWeight={700}>
        Join
      </Typo>
    </div>
  );
};

export default Socials;
