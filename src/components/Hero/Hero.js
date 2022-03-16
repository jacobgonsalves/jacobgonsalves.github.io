import React from 'react';
import FullHeight from 'react-full-height';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (

  <Section id="home" row nopadding style={{paddingTop: "5%"}}>
    <FullHeight startWidth={1024}>
    <LeftSection>
      <SectionTitle main center>
        Welcome to<br />
        my personal showcase
      </SectionTitle>
      <SectionText>
        View a collection of recent projects, career updates, and notable accomplishments
      </SectionText>
      <Button onClick={() => window.location = 'https://linkedin.com/in/jacobgonsalves'}>Connect on LinkedIn</Button>
    </LeftSection>
    </FullHeight>
  </Section>
);

export default Hero;