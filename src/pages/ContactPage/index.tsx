import classNames from 'classnames';

import { Section } from '@/components/Section';

import s from './ContactPage.module.scss';

const ContactPage = () => {
  return (
    <Section className={classNames(s.contact, 'container')}>
      <h1>Contact Page</h1>
    </Section>
  );
};

export default ContactPage;
