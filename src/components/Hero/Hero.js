import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My purpose to build awesome website and application.
      </SectionText>
      <Button onClick = {() => window.location = 'https://google.com'}>Learn more</Button>
    </LeftSection>    
  </Section>
);

export default Hero;