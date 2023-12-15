import React from "react";
import { Parallax } from 'react-parallax';
import { faPhone, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { format } from 'date-fns';
import { Container, Heading } from "components";
import {  Flex, Icon, P, ScrollButton, Image, H2 } from "atoms";
import { IAward } from "interfaces"; 
import { Center, SlideContent } from "./Style";
import bg from 'assets/images/mike.jpg'; 
import { useData } from "hooks";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export const Awards = () => {
  const {_awards} = useData(); 
  return (
    <Parallax blur={0} bgImage={bg} bgImageAlt="the cat" strength={500}>
      <Container id="awards" padding="100px 20px">
        <Heading
          label="AWARDS"
          icon={faShieldAlt}
          sublabel={`Occasionally I have received awards for my accomplishments. To be honest, they have come as a complete surprise when given to me, but a nice surprise nonetheless. :)`}
        />  
        {
          !!_awards.length && (
            <>
              <Center maxWidth="1170px" margin="50px auto" data-aos="fade-up">
              <Swiper
                  navigation={false}
                  pagination
                  speed={500}
                  spaceBetween={30}
                  slidesPerView={4}
                  autoplay={{delay: 4000}}
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
                      640: {
                        slidesPerView: 4,
                      }
                    }
                  }
                  wrapperTag="ol"
                  >
                  {_awards.map((item:IAward) => (
                    <SwiperSlide tag="li" key={item.id}>
                      <SlideContent>
                        <Image src={item.image} alt={`CodeMonkey Mike - ${item.title} - ${item.company}`}/>
                        <H2  white size="var(--text-2xl)" margin="var(--space-4) 0 0">{item.title}</H2>
                        <P className='a-text' bold>{item.company}</P>
                        <P className='a-text' bold>{format(new Date(item.awardTime), 'MMM yyyy')}</P>
                      </SlideContent>
                    </SwiperSlide>
                  ))}
                  
              </Swiper>
            </Center>
            <Flex marginTop={50} sx={{justifyContent: 'center'}} data-aos="fade-up">
            <ScrollButton
              href="#contact"
              to={'contact'}
              spy={true}
              smooth={true}
            ><Icon icon={faPhone} margin="0 10px 0 0"/>CONTACT</ScrollButton>
            </Flex>
            </>
          )
        }
      </Container>
    </Parallax>
  );
};