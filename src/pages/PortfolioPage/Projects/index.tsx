import classNames from 'classnames';

import { Section } from '@/components/ui/Section';
import { Typo } from '@/components/ui/Typo';

import s from './Projects.module.scss';

const Projects = () => {
  return (
    <Section className={classNames('container', s.projects)}>
      <Typo className="hidden" el="h1"></Typo>
    </Section>
  );
};

export default Projects;
