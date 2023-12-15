// @ts-nocheck
import React, {useEffect, useMemo, useState} from "react";
import {faCogs, faPlayCircle, faSearch, faThumbsUp, faTimes, faTools} from "@fortawesome/free-solid-svg-icons";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import _kebabCase from 'lodash/kebabCase';
import {Container, Heading, Modal} from "components";
import {Flex, Icon, P, ScrollButton, Box, H2} from "atoms";
import {
    SlideImage,
    Center,
    Options,
    OptionSet,
    Option,
    OptionLink,
    List,
    Item,
    OverlayZoom,
    Zoom,
    ZoomIcon, 
    IconZoom,
    PortfolioImage, 
    PortfolioDivider, 
    ModalContent,
    ButtonClose,
    SecondButtonClose,
    SocialTitle,
    Link,
    SocialGroup,
    Detail,
    SlideItem,
    ModalContainer,
} from "./Style";
import {IPortfolio} from "interfaces";
import { useData } from "hooks";
import { isBrowser } from "containers/Video";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const removeDuplicate = (arr : Array < string >) => {
    const s = new Set(arr);
    const it = s.values();
    return Array.from(it);
};

const getIcon = (type:string) => {
  switch(type) {
    case 'brands':
      return faSearch;
    case 'social platforms':
      return faCogs;
    case 'tools/services':
      return faTools;
  }
  return faSearch;
};

export const Portfolio = () => {
  const { _portfolios, _getPhoto } = useData();
  const [openModal, setOpenModal] = useState<{
    open: boolean;
    item?: IPortfolio | null;
  }>({
    open: false,
    item: null
  }); 
    const [filter, setFilter] = useState < string > ('*');
    const isotope = React.useRef(null);
    const data = useMemo(()=> _portfolios,[_portfolios]);
    useEffect(() => {
      if(!!data.length && isBrowser) {
        setTimeout(()=> {
        isotope.current = new Isotope('.filter-container', {
          itemSelector: '.filter-item',
          layoutMode: 'fitRows',
          masonry: {
            columnWidth: '25%'
          }
        });
      },3000);
      }
      // cleanup
      // return () => isotope.current && isotope.current.destroy();
    }, [isotope, data,]);

    useEffect(() => {
      if(!!data.length && isBrowser) { 
        if(isotope && isotope.current) {
          filter === '*'
            ? isotope.current.arrange({filter: `*`})
            : isotope.current.arrange({filter: `.${filter}`}); 
          }
      }
    }, [filter, isotope, data]);

    const optionSet : Array < string > = useMemo(() => {
      if(data.length) {
        const options = data
          .map(item => item.type)
          .sort();
        return removeDuplicate(options);
      }
      return [];
    }, [data]);

    const openItem = async (item: IPortfolio) => {
      const {data} = await _getPhoto({parent_id: item.id, category: 'portfolio'});
      setOpenModal({
        open: true,
        item: {
          ...item,
          slideImages: data.getPhoto.photos || []
        },
      });
    };
    return (
        <Container id="portfolio" padding="100px 20px">
            <Heading
                label="PORTFOLIO"
                icon={faThumbsUp}
                sublabel={`The following section contains details about the brands that I have worked with or for, as well as the services and tools that I have worked with or used.`}/>
            <Center maxWidth="1140px" margin="50px auto 0" className="education-timeline">
                <Options data-aos="fade-up">
                    <OptionSet>
                        <Option key={0}>
                            <OptionLink onClick={() => setFilter('*')} active={filter === '*'}>ALL</OptionLink>
                        </Option>
                        {!!optionSet.length && optionSet.map((item : string, idx : number) => (
                            <Option key={`${item}${idx}`}>
                                <OptionLink
                                    onClick={() => setFilter(_kebabCase(item))}
                                    active={item === _kebabCase(filter)}>{item}</OptionLink>
                            </Option>
                        ))}
                    </OptionSet>
                </Options>
                {!!data.length && (
                <List gap={4} columns={[2,2,4]} className="filter-container" data-aos="fade-up">
                    { data.map((item : IPortfolio) => {
                      const uri = `${item.logo}`;
                      const icon = getIcon(item.type);
                      return(
                        <Item key={item.id} className={`filter-item ${_kebabCase(item.type)}`}>
                            <OverlayZoom onClick={()=> openItem(item)}>
                                <PortfolioImage src={uri} alt={`Codemonkey Mike - ${item.client}`}/>  
                                <Zoom className="zoom">
                                  <ZoomIcon>
                                    <IconZoom icon={icon} />
                                  </ZoomIcon>
                                </Zoom>
                              </OverlayZoom>
                            <Box>
                              <H2 white center margin="var(--space-2) 0">{item.client}</H2>
                              <P white center>{item.description}</P>
                            </Box>
                        </Item>
                    );
                    })}
                </List>
                )}
            </Center>
            <Flex
              data-aos="fade-up"
                marginTop={50}
                sx={{
                justifyContent: 'center'
            }}>
                <ScrollButton href="#video" to={'video'} spy={true} smooth={true}><Icon icon={faPlayCircle} margin="0 10px 0 0"/>VIDEO</ScrollButton>
            </Flex>
            {openModal.item && (
            <Modal 
              isOpen={openModal.open}
              onRequestClose={()=>setOpenModal({
                ...openModal,
                open: false
              })}
            >
            <ModalContainer>
              <ModalContent gap={2} columns={openModal.item.slideImages.length ? [1,2] : 1}>
                <ButtonClose onClick={
                  ()=>setOpenModal({
                    ...openModal,
                    open: false
                  })
                } />
                {
                  !!openModal.item.slideImages.length && (
                    <Box>
                      <Swiper
                          pagination={{clickable:true}}
                          speed={500}
                          spaceBetween={0}
                          slidesPerView={1}
                          loop>
                          {openModal.item.slideImages.map(((slide:any) => (
                            <SwiperSlide className="porfolio-swiper">
                              <SlideItem>
                                <SlideImage src={slide.url} alt="" />
                              </SlideItem>
                            </SwiperSlide> 
                          )))}
                          
                      </Swiper>
                    </Box>
                  )
                }
                
                <Box pl={20}>
                  <H2 blue uppercase size="var(--text-2xl)" margin="0 0 var(--space-1)"> {openModal.item.client}</H2>
                  {
                  openModal.item.detail
                  &&openModal.item.detail !== 'null' && (
                  <>
                  <Detail white padding="var(--space-3) 0 var(--space-2)"> {openModal.item.detail}</Detail> 
                  <PortfolioDivider />
                  </>
                  )}
                  {openModal.item.category && openModal.item.category !== 'null' && (
                  <>
                  <P white padding="var(--space-2) 0"><b>Category:</b> {openModal.item.category}</P>
                  <PortfolioDivider />
                  </>
                  )}
                  {openModal.item.website && openModal.item.website !== 'null' && (
                  <>
                  <P white padding="var(--space-2) 0"><b>URL:</b> {openModal.item.website}</P>
                  <PortfolioDivider />
                  </>
                  )}
                  {openModal.item.year && openModal.item.year !== 'null' && (
                  <>
                  <P white padding="var(--space-2) 0"><b>Year:</b> {openModal.item.year}</P>
                  <PortfolioDivider />
                  </>
                  )}
                  {
                    openModal.item.facebook && openModal.item.facebook !== 'null' && (
                      <>
                      <SocialGroup white padding="var(--space-2) 0">
                        <SocialTitle>Facebook:</SocialTitle>{' '}<Link href={openModal.item.facebook} target="_blank">{openModal.item.facebook}</Link>
                      </SocialGroup>
                      <PortfolioDivider />
                      </>
                    )
                  }
                  {
                    openModal.item.twitter && openModal.item.twitter !== 'null' && (
                      <>
                      <SocialGroup white padding="var(--space-2) 0">
                        <SocialTitle>Twitter:</SocialTitle><Link href={openModal.item.twitter} target="_blank">{openModal.item.twitter}</Link>
                      </SocialGroup>
                      <PortfolioDivider />
                      </>
                    )
                  }
                  {
                    openModal.item.pinterest && openModal.item.pinterest !== 'null' && (
                      <>
                      <SocialGroup white padding="var(--space-2) 0">
                        <SocialTitle>Pinterest:</SocialTitle><Link href={openModal.item.pinterest} target="_blank">{openModal.item.pinterest}</Link>
                      </SocialGroup>
                      <PortfolioDivider />
                      </>
                    )
                  }
                  {
                    openModal.item.linkedin && openModal.item.linkedin !== 'null' && (
                      <>
                      <SocialGroup white padding="var(--space-2) 0">
                        <SocialTitle>Linkedin:</SocialTitle><Link href={openModal.item.linkedin} target="_blank">{openModal.item.linkedin}</Link>
                      </SocialGroup>
                      <PortfolioDivider />
                      </>
                    )
                  }
                  <Flex sx={{justifyContent: 'flex-end'}} mt={15} pr={20}>
                    <SecondButtonClose onClick={
                  ()=>setOpenModal({
                    ...openModal,
                    open: false
                  })
                }>
                      <Icon icon={faTimes} /> <span>Close</span>
                    </SecondButtonClose>
                  </Flex>
                </Box>
                
              </ModalContent>
              </ModalContainer>
            </Modal>
            )}
        </Container>
    );
};