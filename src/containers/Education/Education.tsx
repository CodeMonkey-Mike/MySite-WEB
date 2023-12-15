import React from "react";
import { faBook, faCogs } from "@fortawesome/free-solid-svg-icons";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'; 
import { Container, Heading } from "components";
import {   Flex, Icon, P, H3, ScrollButton } from "atoms"; 
import { Center, EducationContent, TextGroup, Left, Right, Divider, LineBottom } from "./Style";
import { useData } from "hooks";
import dayjs from 'dayjs';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const Education = () => { 
  const {_educations} = useData(); 

  return (
    <Container id="education" padding="100px 20px">
      <Heading
        label="EDUCATION"
        icon={faBook}
        sublabel={`Knowledge is power.`}
      />
      {
        !!_educations.length && (
          <>
            <Center maxWidth="1140px" margin="50px auto 0" className="education-timeline">
      {
        _educations.map((e:any, i:number) => {
          if(i % 2 == 0) {
            return (
              <EducationContent key={'k-'+i} data-aos="fade-up" columns={[1,2]} width={['50%', '50%']} gap={0} className="education">
                <Left>
                  <Divider className="divider"><Icon icon={faBook} margin="0"/></Divider>
                  <TextGroup align="right" margin="0 30px 0 0">
                    <H3 className='timeline' size="var(--text-xl)" padding="0 0 var(--space-3) 0">{dayjs(new Date(e.startYear, e.startMonth, 0)).format('MMM YYYY')} - {dayjs(new Date(e.endYear, e.endMonth, 0)).format('MMM YYYY')}</H3>
                    <P>{e.description}</P>
                  </TextGroup>
                </Left>
                <Right>
                  <TextGroup margin="0 0 0 30px">
                    <H3 size="var(--text-xl)" padding="0 0 var(--space-3) 0" blue>{e.degree}</H3>
                    <P><strong>{e.school}</strong> {e.location}</P>
                  </TextGroup>
                </Right>
              </EducationContent>
            );
          }
          return (
            <EducationContent key={'k-'+i} data-aos="fade-up" columns={[1,2]} width={['50%', '50%']} gap={0} className="education">
              <Left>
                <Divider className="divider"><Icon icon={faBook} margin="0"/></Divider>
                <TextGroup align="right" margin="0 30px 0 0">
                  <H3 className='timeline' size="var(--text-xl)" padding="0 0 var(--space-3) 0" blue>{e.degree}</H3>
                  <P><strong>{e.school}</strong> {e.location}
                  </P>
                </TextGroup>
              </Left>
              <Right>
                <TextGroup margin="0 0 0 30px">
                  <H3 size="var(--text-xl)" className='timeline' padding="0 0 var(--space-3) 0" >{dayjs(new Date(e.startYear, e.startMonth, 0)).format('MMM YYYY')} - {dayjs(new Date(e.endYear, e.endMonth, 0)).format('MMM YYYY')}</H3>
                  <P>{e.description}</P>
                </TextGroup>
              </Right>
            </EducationContent>
          );
        })
      }
      
      </Center>
      <LineBottom />
      <Flex marginTop={50} sx={{justifyContent: 'center'}} data-aos="fade-up">
      <ScrollButton
        href="#process"
        to={'process'}
        spy={true}
        smooth={true}
      ><Icon icon={faCogs} margin="0 10px 0 0"/>PROCESS</ScrollButton>
      </Flex>
          </>
        )
      }
      
    </Container>
  );
};