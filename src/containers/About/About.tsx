import React, { useMemo } from "react";
import { faBriefcase, faRocket } from "@fortawesome/free-solid-svg-icons"; 
import { Container, Heading } from "components";
import { Image, Flex, Icon, ScrollButton } from "atoms";
import {Left, Center, Right, TextGroup, SlideContent, AboutDesc, AboutContainer} from './Style';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import dayjs from 'dayjs';

// import slide01 from 'assets/images/uploads/about1.jpg';
// import slide02 from 'assets/images/uploads/about2.jpg';
// import slide03 from 'assets/images/uploads/monkey.jpg';
// import slide04 from 'assets/images/uploads/mike.jpg';
import bgDark from 'assets/images/texture/white-dot.png';  
import { useData } from "hooks";
import { IAboutSlider } from "interfaces";
 
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const About = () => {
  const {_about} = useData();
  // if(!_about) return null;
  const slides = useMemo(() => {
    if(_about?.slider_images) {
      return JSON.parse(_about.slider_images);
    }
    return [];
  },[_about]);
  return (
    <Container id="about" backgroundImage={`${bgDark}`} padding="100px 20px">
      <Heading
        label="ABOUT ME"
        icon={faBriefcase}
        sublabel="Well...about me huh? Where do I start? Here we go..."
      />
      {
        _about && (
          <>
            <AboutContainer paddingY={50} columns={[1,1,1,3]}>
            <Left data-aos="fade-up" data-aos-delay='200'>
              <TextGroup>
                <span>FULL NAME</span>
                <span className='txt-main'>{_about.name}</span>
              </TextGroup>
              <TextGroup>
                <span>BIRTHDAY</span>
                <span className='txt-main'>{dayjs(_about.dob).format('DD MMM')}</span>
              </TextGroup>
              <TextGroup>
                <span>BIRTH PLACE</span>
                <span className='txt-main'>{_about.birthPlace}</span>
              </TextGroup>
              <TextGroup>
                <span>HOBBIES</span>
                <span className='txt-main'>{_about.hobby}</span>
              </TextGroup>
            </Left>
            <Center data-aos="fade-up">
              <Swiper
                  navigation
                  speed={500}
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay>
                    {!!slides.length && slides.map((item:IAboutSlider) => (
                      <SwiperSlide tag="li" key={item.uid}>
                        <SlideContent>
                          <Image src={item.url} alt=""/>
                        </SlideContent>
                      </SwiperSlide>
                    ))}
              </Swiper>
            </Center>
            <Right data-aos="fade-up" data-aos-delay='200'>
              <TextGroup>
                  <span>ADDRESS</span>
                  <span className='txt-main'>{_about.address}</span>
                </TextGroup>
                <TextGroup>
                  <span>PHONE</span>
                  <span className='txt-main'>{_about.phone}</span>
                </TextGroup>
                <TextGroup>
                  <span>EMAIL</span>
                  <a href={`mailto:${_about.email}`}><span className='txt-main'>{_about.email}</span></a>
                </TextGroup>
                <TextGroup>
                  <span>WEB</span>
                  <span className='txt-main'>{_about.web}</span>
                </TextGroup>
            </Right>
          </AboutContainer>
          <Flex sx={{justifyContent: 'center'}} data-aos="fade-up">
            <AboutDesc maxWidth="700px" width="100%" center grey lineHeight={1.2}>{_about.bio}</AboutDesc>
          </Flex>
          <Flex marginTop={50} sx={{justifyContent: 'center'}} data-aos="fade-up">
            <ScrollButton
              href="#skills"
              to={'skills'}
              spy={true}
              smooth={true}
            ><Icon icon={faRocket} margin="0 10px 0 0"/> MY SKILLS</ScrollButton>
          </Flex>
          </>
        )
      }
    </Container>
  );
};