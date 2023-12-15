import React, { useMemo, } from "react";
import { faQuoteLeft, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Container, Heading } from "components";
import {  Flex, Icon, P, H3, ScrollButton } from "atoms"; 
import { ITestimonial } from "interfaces"; 
import { Center, SlideContent } from "./Style";
import { useData } from "hooks";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export const Testimonials = () => {
  const {_testimonials} = useData();
  const data = useMemo(()=> _testimonials, [_testimonials]);
  return (
    <Container id="testimonials" padding="100px 20px">
        <Heading
          label="TESTIMONIALS"
          icon={faQuoteLeft}
        />  
        <Center maxWidth="1170px" margin="50px auto" data-aos="fade-up">
          <Swiper
              navigation={false}
              pagination={{clickable: true}}
              speed={500}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{delay: 4000}}
              wrapperTag="ol"
              >
              {!!data.length && data.map((item:ITestimonial) => (
                <SwiperSlide tag="li" key={item.id}>
                  <SlideContent>
                    <P className="feedback" white size="var(--text-2xl)" lineHeight={1.3}>
                      {item.quote}
                    </P>
                    <H3 blue size="var(--text-2xl)" margin="var(--space-5) 0 var(--space-2)">
                    - {item.name} -
                    </H3>
                    <P white size="var(--text-xl)">{item.company}</P>
                  </SlideContent>
                </SwiperSlide>
              ))}
              
          </Swiper>
        </Center>
        <Flex marginTop={50} sx={{justifyContent: 'center'}} data-aos="fade-up">
        <ScrollButton
          href="#awards"
          to={'awards'}
          spy={true}
          smooth={true}
        ><Icon icon={faShieldAlt} margin="0 10px 0 0"/>AWARDS</ScrollButton>
        </Flex>
      </Container>
  );
};