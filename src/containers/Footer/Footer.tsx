import { faAngleDoubleUp  } from '@fortawesome/free-solid-svg-icons';
import { Icon, Image, P } from 'atoms'; 
import React from 'react';
import { FooterContainer, FooterContent, FooterIcon,FooterDivider } from "./Style";
import TopIcon from 'assets/images/servi-blue.png';

export const Footer = () => {
  return(
  <FooterContainer>
    <FooterContent maxWidth="1170px">
      <Image src={TopIcon} alt="footer" />
      <P size="var(--text-xl)" margin="var(--space-7) 0 var(--space-3)">© {(new Date().getFullYear())}. Mike Neder.</P>
      <P size="var(--text-xl)">Efficiency, Agility...Success!</P>
      <FooterDivider  />
      <FooterIcon
        href="#hero-slider"
        to={'hero-slider'}
        spy={true}
        smooth={true}
      >
        <Icon icon={faAngleDoubleUp} fill="var(--color-white)" />
      </FooterIcon> 
    </FooterContent>
  </FooterContainer>
);};