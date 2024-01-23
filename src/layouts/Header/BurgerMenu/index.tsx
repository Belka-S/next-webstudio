import classNames from 'classnames';

import Socials from '@/components/Socials';
import SvgIcon from '@/components/ui/SvgIcon';

import ContactInfo from '../ContactInfo';
import SiteNav from '../SiteNav';
import s from './BurgerMenu.module.scss';

interface IBurgerMenyProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const BurgerMenu = ({ isOpen, setIsOpen }: IBurgerMenyProps) => {
  return (
    <div className={classNames(s.burger, isOpen && s['is-open'])}>
      <button
        className={s.button}
        type="button"
        onClick={() => setIsOpen(false)}
      >
        <SvgIcon id="ui-cross" width={40} height={40} />
      </button>

      <div onClick={() => setIsOpen(false)}>
        <SiteNav styleNav={s.nav} styleLink={s.nav__link} />
      </div>
      <ContactInfo styleInfo={s.contacts} styleLink={s.contacts__link} />

      <Socials
        variant="title"
        styleSocials={s.socials}
        styleLink={s.socials__link}
      />
    </div>
  );
};

export default BurgerMenu;
