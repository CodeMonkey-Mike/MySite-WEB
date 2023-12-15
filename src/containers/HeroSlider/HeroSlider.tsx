// @ts-nocheck
import React, { useCallback, useEffect, useState, useRef } from "react";
import { Text as P, Icon, ScrollButton} from "atoms";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideContainer, SlideContent, ButtonGroup, Heading, CaptionContainer, SliderProgress, ContainerStart, PrevButton, NextButton} from "./Style";
import { faDownload, faBriefcase, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import BgSlider01 from 'assets/images/uploads/slide1.jpg';
import BgSlider02 from 'assets/images/uploads/slide2.jpg';
import BgSlider03 from 'assets/images/uploads/slide3.jpg';
import BgSlider04 from 'assets/images/uploads/slide4.jpg';
// install Swiper modules
import 'animate.css';
import { useSlider } from "hooks";
import { Preloader } from "components";
import { isBrowser } from "containers/Video";
import { useRouter } from "next/router";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]); 

export const HeroSlider = () => {
  const router = useRouter();
  const {addAnimated, zoomOut} = useSlider();
  const [loading, setLoading] = useState(true);
  const [slideId, setSlideId] = useState(1);
  const [index, setIndex] = useState(0);
  const sliderRef = useRef();

  // @ts-ignore 
  const addAnimationSlide01 = useCallback(() => { 
    const needReLoad = window.localStorage.getItem('needReload');
    if(needReLoad !== 'true') {
      addAnimated({
        elements:[ '.heading_1_0',  '.heading_2_0', '.sub_heading_0', '.caption_0', '.button_1_0', '.button_2_0' ],
        animateStyles: ['animate__flipInX','animate__flipInX', 'animate__fadeInDown', 'animate__lightSpeedInLeft', 'animate__lightSpeedInLeft', 'animate__lightSpeedInLeft'],
        action: 'add',
      });
    }
  },[addAnimated]);

  useEffect(()=> {
    if(isBrowser) {
      window.addEventListener('load', ()=> setLoading(false));
    }
  },[addAnimationSlide01]);

  useEffect(()=> {
    if(window) {
      const needReLoad = window.localStorage.getItem('needReload');
      if(needReLoad === 'true') {
        setLoading(false);
        window.localStorage.removeItem('needReload');
      }
    }
  },[]);
  
  useEffect(()=> {
    if(slideId) {
      const elem = document.getElementById(`slideId${slideId}`);
      if(elem) {
        let width = 1;
        const autoplayTime = 10000 / 100;
        const id = setInterval(frame, autoplayTime);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                // @ts-ignore
                elem.style.width = '0'; 
            } else {
                width++; 
                // @ts-ignore
                elem.style.width = width + '%'; 
            }
        }
      }
    }
  },[slideId]);

  const onSlidePrev = useCallback((index:number)=> {
    const swiper = document.querySelector('.swiper-container').swiper;
    swiper.slideTo(index === 0 ? 3 : index-1);
  }, []);
  const onSlideNext = useCallback((index:number)=> { 
    const swiper = document.querySelector('.swiper-container').swiper;
    swiper.slideTo(index === 3 ? 0 : index+1);
  }, []);
  
  return (
    <SlideContainer id="hero-slider">
    <Preloader loading={loading}/>
    
    <Swiper
      className='swiper-container'
      ref={sliderRef}
      navigation={false}
      pagination={{ clickable: true }}
      speed={1000}
      spaceBetween={0}
      slidesPerView={1}
      effect="fade"
      onSlideChange={(slide) => {
        const {activeIndex, previousIndex} = slide;
        setSlideId(activeIndex+1);
        setIndex(activeIndex);
        addAnimated({
          elements:[ `.heading_1_${previousIndex}`,  `.heading_2_${previousIndex}`, `.sub_heading_${previousIndex}`, [`.caption_1_${previousIndex}`,`.caption_2_${previousIndex}`], `.button_1_${previousIndex}`, `.button_2_${previousIndex}` ],
          animateStyles: ['animate__flipInX','animate__flipInX', 'animate__fadeInDown', ['animate__lightSpeedInLeft', 'animate__lightSpeedInRight'], 'animate__lightSpeedInLeft', 'animate__lightSpeedInLeft'],
          action: 'remove',
        });
        zoomOut({index: previousIndex, action: 'remove'});
        setTimeout(()=> {
          addAnimated({
            elements:[ `.heading_1_${activeIndex}`,  `.heading_2_${activeIndex}`, `.sub_heading_${activeIndex}`, [`.caption_1_${activeIndex}`,`.caption_2_${activeIndex}`], `.button_1_${activeIndex}`, `.button_2_${activeIndex}` ],
            animateStyles: ['animate__flipInX','animate__flipInX', 'animate__fadeInDown', ['animate__lightSpeedInLeft', 'animate__lightSpeedInRight'], 'animate__lightSpeedInLeft', 'animate__lightSpeedInLeft'],
            action: 'add',
          });
          zoomOut({index: activeIndex, action: 'add'});
        },800);
      }}
      onInit={(slide) => {
        const {activeIndex} = slide;
        addAnimated({
          elements:[ `.heading_1_${activeIndex}`,  `.heading_2_${activeIndex}`, `.sub_heading_${activeIndex}`, [`.caption_1_${activeIndex}`,`.caption_2_${activeIndex}`], `.button_1_${activeIndex}`, `.button_2_${activeIndex}` ],
          animateStyles: ['animate__flipInX','animate__flipInX', 'animate__fadeInDown', ['animate__lightSpeedInLeft', 'animate__lightSpeedInRight'], 'animate__lightSpeedInLeft', 'animate__lightSpeedInLeft'],
          action: 'add',
        });
        zoomOut({index: activeIndex, action: 'add'});
      }}
      style={{
        height: "100%"
      }}
      // loop
      autoplay={{delay: 10000, disableOnInteraction: false}}
    >
      <SwiperSlide style={{
        backgroundImage: `url(${BgSlider01})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
      }}>
        <SlideContent flex>
          <SliderProgress id={`slideId1`}/>
          <Heading>
            <P margin="0 var(--space-10) 0 0"
            className="animate__animated heading_1_0 visible"
            >MIKE</P><P
            className="animate__animated heading_2_0 visible"
            >{' '}NEDER</P>
          </Heading>
          <P className="animate__animated sub-heading sub_heading_0 visible" title="V-CARD / RESUME / PORTFOLIO"
          >V-CARD / RESUME / PORTFOLIO</P>
          <CaptionContainer relative>
            <P className="animate__animated caption caption_1_0 visible" title="ENJOY THE RIDE...ALWAYS">ENJOY THE RIDE...ALWAYS</P>
            <P className="animate__animated caption caption_2_0 visible" title="22 YEARS EXPERIENCE">22 YEARS EXPERIENCE</P>
          </CaptionContainer>
          <ButtonGroup flex>
            <ScrollButton
            href="#download"
            to={'download'}
            spy={true}
            smooth={true} className="animate__animated button_1_0 visible"><Icon icon={faDownload} margin="0 var(--space-3) 0 0"/>Download Media Kit</ScrollButton>
            <ScrollButton
            href="#contact"
            to={'contact'}
            spy={true}
            smooth={true} className="animate__animated button_2_0 visible"><Icon icon={faBriefcase} margin="0 var(--space-3) 0 0"/>CONTACT ME</ScrollButton>
          </ButtonGroup>
        </SlideContent>
      </SwiperSlide>
      <SwiperSlide style={{
        backgroundImage: `url(${BgSlider02})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
      }}>
        <SlideContent flex>
        <SliderProgress id={`slideId2`}/>
        <Heading>
            <P margin="0 var(--space-10) 0 0"
            className="animate__animated heading_1_1 visible"
            >MIKE</P><P
            className="animate__animated heading_2_1 visible"
            >{' '}NEDER</P>
          </Heading>
          <P className="animate__animated sub-heading sub_heading_1 visible" 
          >INNOVATOR</P>
          <CaptionContainer relative>
            <P className="animate__animated caption caption_1_1 visible">THINKING OUTSIDE THE BOX</P>
            <P className="animate__animated caption caption_2_1 visible">LONG-TERM VISION</P>
          </CaptionContainer>
          <ButtonGroup flex>
          <ScrollButton
            href="#download"
            to={'download'}
            spy={true}
            smooth={true} className="animate__animated button_1_1 visible"><Icon icon={faDownload} margin="0 var(--space-3) 0 0"/>Download Media Kit</ScrollButton>
           <ScrollButton
            href="#portfolio"
            to={'portfolio'}
            spy={true}
            smooth={true} className="animate__animated button_2_1 visible"><Icon icon={faThumbsUp} margin="0 var(--space-3) 0 0"/>PORTFOLIO</ScrollButton>
          </ButtonGroup>
        </SlideContent>
      </SwiperSlide>
      <SwiperSlide style={{
        backgroundImage: `url(${BgSlider03})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
      }}>
        <SlideContent flex>
        <SliderProgress id={`slideId3`}/>
        <Heading>
            <P margin="0 var(--space-10) 0 0"
            className="animate__animated heading_1_2 visible"
            >MIKE</P><P
            className="animate__animated heading_2_2 visible"
            >{' '}NEDER</P>
          </Heading>
          <P className="animate__animated sub-heading sub_heading_2 visible">TECHNOLOGY LEADER</P>
          <CaptionContainer relative>
            <P className="animate__animated caption caption_1_2 visible">LARGE SCALE PROJECTS</P>
            <P className="animate__animated caption caption_2_2 visible">GLOBALLY DISTRIBUTED TEAMS</P>
          </CaptionContainer>
          <ButtonGroup flex>
          <ScrollButton 
            href="#download"
            to={'download'}
            spy={true}
            smooth={true}
            className="animate__animated button_1_2 visible"><Icon icon={faDownload} margin="0 var(--space-3) 0 0"/>Download Media Kit</ScrollButton>
          <ScrollButton
            href="#about"
            to={'about'}
            spy={true}
            smooth={true}
            className="animate__animated button_2_2 visible"><Icon icon={faBriefcase} margin="0 var(--space-3) 0 0"/>ABOUT ME</ScrollButton>
          </ButtonGroup>
        </SlideContent>
      </SwiperSlide>
      <SwiperSlide style={{
        backgroundImage: `url(${BgSlider04})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
      }}>
        <SlideContent flex>
        <SliderProgress id={`slideId4`}/>
        <Heading>
            <P margin="0 var(--space-10) 0 0"
            className="animate__animated heading_1_3 visible"
            >MIKE</P><P
            className="animate__animated heading_2_3 visible"
            >{' '}NEDER</P>
          </Heading>
          <P className="animate__animated sub-heading sub_heading_3 visible">GROWTH ENGINEER</P>
          <CaptionContainer className="double" relative>
            <P className="animate__animated caption caption_1_3 visible" title="HIGHLY MOTIVATED">NUMBERS TELL THE TALE</P>
            <P className="animate__animated caption caption_2_3 visible" title="SUCCESS IS PARAMOUNT!">CONVERSION IS KING!</P>
          </CaptionContainer>
          <ButtonGroup flex>
            <ScrollButton 
            href="#download"
            to={'download'}
            spy={true}
            smooth={true}
            className="animate__animated button_1_3 visible"><Icon icon={faDownload} margin="0 var(--space-3) 0 0"/>Download Media Kit</ScrollButton>
            <ScrollButton
            href="#contact"
            to={'contact'}
            spy={true}
            smooth={true}
            className="animate__animated button_2_3 visible"><Icon icon={faBriefcase} margin="0 var(--space-3) 0 0"/>CONTACT ME</ScrollButton>
          </ButtonGroup>
        </SlideContent>
      </SwiperSlide>
      <ContainerStart slot="container-start">
        <PrevButton onClick={()=>onSlidePrev(index)}/>
        <NextButton onClick={()=>onSlideNext(index)}/>
      </ContainerStart>
    </Swiper>
    </SlideContainer>
  );
};