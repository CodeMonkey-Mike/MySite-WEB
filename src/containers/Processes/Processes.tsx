import React, {  useMemo } from "react";
import { Parallax } from 'react-parallax';
import { faCogs, faTags, faTools } from "@fortawesome/free-solid-svg-icons";
import { Container, Heading } from "components";
import { Flex, Icon, ScrollButton } from "atoms";
import bg from 'assets/images/bgd1.jpg'; 
import { IProcess } from "interfaces"; 
import { Center, ProcessItem, ProcessTitle, ProcessIcon } from "./Style"; 
import { useData } from "hooks";
 
export const Processes = () => {
  const {_processes, _about} = useData();
  const data = useMemo(() => _processes || [], [_processes]);
  const scrollButton = useMemo(() => {
    if(_about?.hide_experience) {
      return (
        <ScrollButton
          href="#services"
          to={'services'}
          spy={true}
          smooth={true}
        ><Icon icon={faTools} margin="0 10px 0 0"/>SERVICES</ScrollButton>
      );
    }
    return (
      <ScrollButton
        href="#work-experience"
        to={'work-experience'}
        spy={true}
        smooth={true}
      ><Icon icon={faTags} margin="0 10px 0 0"/> WORK EXPERIENCE</ScrollButton>
    );
  },[_about]);

  return (
    <Parallax blur={0} bgImage={bg} bgImageAlt="the cat" strength={500}>
      <Container id="process" padding="100px 20px">
        <Heading
          label="PROCESS"
          icon={faCogs}
          sublabel={`Seeing a project through, from inception to return on investment.`}
        />  
        <Center maxWidth="1170px" margin="var(--space-12) auto 0" data-aos="fade-up">
          {!!data.length && data.map((item:IProcess) => (
              <ProcessItem key={item.id}>
                <ProcessIcon className={`fas ${item.icon}`} />
                <ProcessTitle>{item.name}</ProcessTitle>
            </ProcessItem>
          ))}
        </Center>
        <Flex marginTop={50} sx={{justifyContent: 'center'}} data-aos="fade-up">
        {scrollButton}
        </Flex>
      </Container>
    </Parallax>
  );
};