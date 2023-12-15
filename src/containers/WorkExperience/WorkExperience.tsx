// @ts-nocheck
import React, { Fragment, useMemo } from "react";
import { faTags,  faTools } from "@fortawesome/free-solid-svg-icons"; 
import { Container, Heading } from "components";
import _chunk from 'lodash/chunk';
import { Flex, Icon, ScrollButton,H3, P, Link } from "atoms";
import { 
  WContainer,
  WorkExpContent,
  LineBottom,
  Content,
  Left,
  Right,
  Arrow,
  Title,
  WorkDate,
} from "./Style";
import { useData } from "hooks";
import dayjs from 'dayjs';
 
export const WorkExperience = () => { 
  const {_experiences, _about} = useData();

  const data = useMemo(()=> _experiences.filter(item => !item.hide) || [],[_experiences]);

  if(_about?.hide_experience) {
    return null;
  }
  
  const _data = _chunk(data, 2);
  
  return (
    <Container id="work-experience" padding="100px 20px">
      <Heading
        label="WORK EXPERIENCE"
        icon={faTags}
        sublabel={`With a vast history of work experience, \nhere are some of the most challenging and intellectually rewarding projects on which I have had the pleasure of working.`}
      />
      <WContainer maxWidth="1140px" margin="50px auto 0">
      {
        data.length > 2 ? (
          _data.map((_d, idx) => {
            const [right, left] = _d;
            return(
            // @ts-ignore
            <WorkExpContent key={'k-'+ idx} columns={[2,2]} width={['50%', '50%']} gap={0} data-aos="fade-up"> 
                <Content>
              {
                left && (
                  <Left>
                    <Arrow className='blue left'/>
                    <H3 size="var(--text-xl)" margin="0 0 var(--space-2) 0" blue>{left.company}</H3>
                    <Title>{left.title}</Title>
                    <WorkDate className='blue'>{dayjs(new Date(left.startYear, left.startMonth, 0)).format('MMM YYYY')} - {!left.current ? dayjs(new Date(left.endYear, left.endMonth, 0)).format('MMM YYYY') : 'CURRENT'}</WorkDate>
                    <P margin="0 0 var(--space-3) 0" lineHeight={1.3}>{left.description}</P>
                    <Link href={left.website_url} content={left.website} target="_blank" rel="nofollow"/>
                </Left>
                )
              }
              </Content>
              <Content>
              {
                right && (
                    <Right>
                        <Arrow right className='blue right'/>
                        <H3 size="var(--text-xl)" margin="0 0 var(--space-2) 0" blue>{right.company}</H3>
                        <Title>{right.title}</Title>
                        <WorkDate className='blue'>{dayjs(new Date(right.startYear, right.startMonth, 0)).format('MMM YYYY')} - {!right.current ? dayjs(new Date(right.endYear, right.endMonth, 0)).format('MMM YYYY') : 'CURRENT'}</WorkDate>
                        <P margin="0 0 var(--space-3) 0" lineHeight={1.3}>{right.description}</P>
                        {!!right.website && (<Link href={right.website_url} content={right.website} target="_blank" rel="nofollow"/>)}
                    </Right>
                )
              } 
              </Content>
            </WorkExpContent>
          );})
        ) : (
          <WorkExpContent columns={[2,2]} width={['50%', '50%']} gap={0} data-aos="fade-up">
            {
              _data.map(([right, left], i) => (
                <Fragment key={'k-'+i}>
                  <Content>
                    {left && (
                      <Left>
                        <Arrow className='blue left'/>
                          <H3 size="var(--text-xl)" margin="0 0 var(--space-2) 0" blue>{left.company}</H3>
                          <Title>{left.title}</Title>
                          <WorkDate className='blue'>{dayjs(new Date(left.startYear, left.startMonth, 0)).format('MMM YYYY')} - {!left.current ? dayjs(new Date(left.endYear, left.endMonth, 0)).format('MMM YYYY') : 'CURRENT'}</WorkDate>
                          <P margin="0 0 var(--space-3) 0" lineHeight={1.3}>{left.description}</P>
                          <Link href={left.website_url} content={left.website} target="_blank" rel="nofollow"/>
                      </Left>
                    )}
                  </Content>
                  {
                    right && (
                      <Content>
                        <Right>
                            <Arrow right className='blue right'/>
                            <H3 size="var(--text-xl)" margin="0 0 var(--space-2) 0" blue>{right.company}</H3>
                            <Title>{right.title}</Title>
                            <WorkDate className='blue'>{dayjs(new Date(right.startYear, right.startMonth, 0)).format('MMM YYYY')} - {!right.current ? dayjs(new Date(right.endYear, right.endMonth, 0)).format('MMM YYYY') : 'CURRENT'}</WorkDate>
                            <P margin="0 0 var(--space-3) 0" lineHeight={1.3}>{right.description}</P>
                            {!!right.website && (<Link href={right.website_url} content={right.website} target="_blank" rel="nofollow"/>)}
                        </Right>
                      </Content>
                    )
                  }
                </Fragment>
              ))
            }  
          </WorkExpContent>
        )
        
      }
      </WContainer>
      <LineBottom />
      <Flex marginTop={50} sx={{justifyContent: 'center'}} data-aos="fade-up">
      <ScrollButton
        href="#services"
        to={'services'}
        spy={true}
        smooth={true}
      ><Icon icon={faTools} margin="0 10px 0 0"/>SERVICES</ScrollButton>
      </Flex>
    </Container>
  );
};