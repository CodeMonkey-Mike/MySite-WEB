import React, {   useMemo, } from "react"; 
import { faBook, faRocket } from "@fortawesome/free-solid-svg-icons";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Container, DonutChart, Heading } from "components";
import {   Flex, Icon, P, ScrollButton } from "atoms"; 
import { ISkills } from "interfaces";
import { FixedBackground, Center, SlideContent } from "./Style";
import { useData } from "hooks";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export const MySkills = () => { 
  const {_skills} = useData();
  const data = useMemo(() => _skills,[_skills]);
  return (
    <FixedBackground>
      <Container id="skills" padding="100px 20px">
        <Heading
          label="MY SKILLS"
          icon={faRocket}
          sublabel={`Through marketing, development, and management, I have accumulated a vast range of skills and experience over the years. Being a web <dfn title="a person whose expertise spans a significant number of different subject areas; such a person is known to draw on complex bodies of knowledge to solve specific problems. The term was first used in the seventeenth century but the related term, polyhistor, is an ancient term with similar meaning.">polymath</dfn> is probably one of the most exciting and rewarding aspects about this business.`}
        />  
        <Center maxWidth="1170px" margin="0 auto" data-aos="fade-up">
          <Swiper
              navigation={false}
              pagination={{clickable: true}}
              speed={500}
              spaceBetween={0}
              slidesPerView={5}
              autoplay={{delay: 5000}}
              breakpoints={
                {
                  320: {
                    slidesPerView: 2,
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 3,
                  },
                  // when window width is >= 640px
                  1024: {
                    slidesPerView: 5,
                  },
                  1800: {
                    slidesPerView: 6,
                  },
                }
              }
              wrapperTag="ol"
              >
              {!!data.length && data.map((item:ISkills) => (
                <SwiperSlide tag="li" key={'k-'+item.id}>
                  <SlideContent>
                    <DonutChart metric={item.strength} />
                    <P className='skill-name'>{item.name}</P>
                  </SlideContent>
                </SwiperSlide>
              ))}
              
          </Swiper>
        </Center>
        <Flex marginTop={50} sx={{justifyContent: 'center'}} data-aos="fade-up">
        <ScrollButton
          href="#education"
          to={'education'}
          spy={true}
          smooth={true}
        ><Icon icon={faBook} margin="0 10px 0 0"/> EDUCATION</ScrollButton>
        </Flex>
      </Container>
    
    </FixedBackground>
  );
};