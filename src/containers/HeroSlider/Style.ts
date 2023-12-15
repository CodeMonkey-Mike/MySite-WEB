import { Box, H2 } from 'atoms';
import styled from 'styled-components';
import NavLeft from 'assets/images/large_left.png';
import NavRight from 'assets/images/large_right.png';


export const SliderProgress = styled.div`
  height: 4px;
  background-color: #8f8f8f;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 0;
  box-shadow: 0 7px 5px -5px rgba(0, 0, 0, 0.4);
`;

export const ContainerStart = styled.div``;

const nav = `
  position: absolute;
  top: 50%;
  height: var(--swiper-navigation-size);
  margin-top: -22px;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--swiper-navigation-color,var(--swiper-theme-color));
`;
export const PrevButton = styled.div`
  ${nav}
  background-image: url(${NavLeft});
  width: 40px;
  height: 40px;
  left: 20px;
  cursor: pointer;
  pointer-events: auto;
  opacity: 1;
  &:after {
    display: none;
  }
`;
export const NextButton = styled.div`
  ${nav}
  background-image: url(${NavRight});
  width: 40px;
  height: 40px;
  cursor: pointer;
  right: 20px;
  pointer-events: auto;
  opacity: 1;
  &:after {
    display: none;
  }
`;

export const SlideContainer = styled.div`
  height: 100%;
  .swiper-button-prev {
    background-image: url(${NavLeft});
    width: 40px;
    height: 40px;
    left: 20px;
    cursor: pointer;
    pointer-events: auto;
    opacity: 1;
    &:after {
      display: none;
    }
  }
  .swiper-button-next {
    background-image: url(${NavRight});
    width: 40px;
    height: 40px;
    cursor: pointer;
    right: 20px;
    pointer-events: auto;
    opacity: 1;
    &:after {
      display: none;
    }
  }
  .swiper-pagination {
    .swiper-pagination-bullet {
      width: var(--space-4);
      height: var(--space-4);
      border: 2px solid var(--color-white);
      opacity: 0.5;
    }
    .swiper-pagination-bullet-active {
      opacity: 1;
    }
  }
`;
export const SlideContent = styled(Box)`
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    padding-top: 100px;
  }
  .sub-heading {
    font-size: 40px;
    color: var(--color-white);
    @media (max-width: 767px) {
      font-size: 30px;
      text-align: center;
    }
    @media (min-width: 1800px) {
      font-size: 60px;
    }
  }
  .caption {
    border-top-width: 2px;
    border-bottom-width: 2px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: #fff;
    border-bottom-color: #fff;
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 60px;
    color: var(--color-white);
    margin: var(--space-20) 0;
    font-weight: bold;
    @media (max-width: 1024px) { 
      font-size: 40px;
    }
    @media (max-width: 767px) {
      font-size: 26px;
    }
  }
  .visible {
    display: none;
  }

  *[class*='heading_1'] {
    animation-delay: 1s;
  }
  *[class*='heading_2'] {
    animation-delay: 1.5s;
  }
  *[class*='sub_heading'] {
    animation-delay: 2s;
  }
  *[class*='caption_1'] {
    animation-delay: 2.5s;
    position: relative;
    top: 0;
    z-index: 1;
  }
  *[class*='caption_2'] {
    animation-delay: 7s;
    position: absolute;
    top: 0;
    z-index: 100;
    width: auto;
    white-space: nowrap;
  }
  *[class*='button_1'] {
    animation-delay: 3s;
  }
  *[class*='button_2'] {
    animation-delay: 3.5s;
  }
`;

export const CaptionContainer = styled(Box)`
  display: flex;
  justify-content: center;
`; 

export const Heading = styled(H2)`
  justify-content: center;
  display: flex;
  font-weight: 900;
  font-family: ${({ theme }) => theme.fontFamilies.raleway};
  span {
    color: var(--color-white);
    font-size: 120px;
  } 
  @media (max-width: 1024px) { 
    span {
      font-size: 70px;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    span {
      font-size: 50px;
    }
  }
  @media (min-width: 1800px) {
    span {
      font-size: 140px;
    }
  }
`;

export const ButtonGroup = styled(Box)`
  justify-content: center;
  a {
    font-size: var(--text-xl);
    white-space: nowrap;
    padding: 12px 30px;
    height: auto;
    &:first-child {
      margin-right: 40px;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    a {
      &:first-child {
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
  }
  @media (min-width: 1800px) {
    a {
      font-size: var(--text-2xl);
    }
  }
`;
