import classNames from 'classnames';

import { Section } from '@/components/ui/Section';

import s from './ContactPage.module.scss';

const ContactPage = () => {
  return (
    <Section className={classNames('container', s.contact)}>
      <h1>Contact Page</h1>
    </Section>
  );
};

export default ContactPage;
