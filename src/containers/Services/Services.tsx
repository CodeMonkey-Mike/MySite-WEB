import { Parallax } from 'react-parallax';
import React, { useMemo } from "react";
import { faThumbsUp, faTools } from "@fortawesome/free-solid-svg-icons";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Container, Heading } from "components";
import {  Flex, Icon, P, ScrollButton, Image } from "atoms";
import bg from 'assets/images/bgd3.jpg'; 
import { IService } from "interfaces"; 
import { Center, SlideContent } from "./Style";
import { useData } from "hooks";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export const Services = () => {
  const {_services} = useData();
  const data = useMemo(()=> _services, [_services]);
  return (
    <Parallax blur={0} bgImage={bg} bgImageAlt="the cat" strength={500}>
      <Container id="services" padding="100px 20px">
        <Heading
          label="SERVICES"
          icon={faTools}
          sublabel={`Well versed in the following, all ingredients to an end goal of success.`}
        />  
        <Center maxWidth="1170px" margin="50px auto" data-aos="fade-up"> 
          <Swiper
              navigation={false}
              pagination
              speed={500}
              spaceBetween={0}
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
                  1024: {
                    slidesPerView: 4,
                  },
                  1600: {
                    slidesPerView: 5,
                  },
                }
              }
              wrapperTag="ol"
              >
              {!!data.length && data.map((item:IService) => (
                <SwiperSlide tag="li" key={item.id}>
                  <SlideContent>
                    <Image src={item.image} alt={item.name}/>
                    <P className='skill-name'>{item.name}</P>
                  </SlideContent>
                </SwiperSlide>
              ))}
              
          </Swiper>
        </Center>
        <Flex marginTop={50} sx={{justifyContent: 'center'}} data-aos="fade-up">
        <ScrollButton
          href="#portfolio"
          to={'portfolio'}
          spy={true}
          smooth={true}
        ><Icon icon={faThumbsUp} margin="0 10px 0 0"/>PORTFOLIO</ScrollButton>
        </Flex>
      </Container>
    </Parallax>
  );
};