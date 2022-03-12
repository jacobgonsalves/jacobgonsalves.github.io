import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this website is to showcase my skills and current timeline
      </SectionText>
      <Button onClick={() => window.location = 'http://google.com'} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;