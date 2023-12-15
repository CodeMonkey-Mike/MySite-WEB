import { Box, Grid, Icon, Image, P } from "atoms";
import { Container } from "components";
import { Close, Divider } from "theme-ui";
import styled from "styled-components";

export const Center = styled(Container)`
  @media (min-width: 1800px) {
    max-width: 1600px;
  }
`; 

export const Options = styled.div`
  margin-bottom: var(--space-5);
  line-height: normal;
  margin-left: auto;
  margin-right: auto;
`;
export const OptionSet = styled.ul` 
  width: auto;
  padding: 0;
  margin: 0;
  text-align:center;
`;

export const Option = styled.li` 
  display: inline-block;
`;

export const SocialGroup = styled(P)` 
  display:flex;
  flex-direction: 'column';
  line-height: 1.2;
  @media (min-width: 1024px) {
    align-items: center;
  }
`;

export const Link = styled.a` 
  text-decoration: none;
  font-size: var(--text-base);
`;

export const SocialTitle = styled.span` 
  margin-right: 10px;
`;

export const OptionLink = styled.span<{active:boolean}>` 
  display: inline-block;
  margin-left: 2px;
  margin-right: 2px;
  border: 2px solid #ccc;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  padding: 6px 16px;
  color: var(--color-white);
  text-transform: uppercase;
  cursor: pointer;
  ${({active}) => active ? `
    border: var(--border-2) solid var(--color-blue);
    background-color: var(--color-blue);
  `: `
    border: var(--border-2) solid var(--color-white);
    background-color: transparent;
  `}
  &:hover {
    border: var(--border-2) solid var(--color-blue);
    background-color: var(--color-blue);
  }
  @media (min-width: 1800px) {
    margin-left: 4px;
    margin-right: 4px;
    font-size: var(--text-1xl);
  }
`;

export const List = styled(Grid)`
`;

export const Item = styled.div`
  width: 25%;
  padding: 0 1%;
  margin-bottom:  var(--space-6);
  @media (max-width: 767px) {
    width: 50%;
  }
`;
 
export const OverlayZoom = styled(Box)`
  position: relative;
  cursor: pointer;
  &:hover {
    .zoom {
      width: 100%;
      height: 100%;
      margin: auto!important;
    }
  }
`;
 
export const PortfolioImage = styled(Image)`
  vertical-align: bottom;
`;

export const SlideImage = styled(Image)`
  width: 100%;
`;

export const SlideItem = styled.div`
  width: 100%;
  height: 100%;
  max-height: 500px;
  overflow-y: hidden;
  @media (max-width: 600px) {
    max-height: 350px;
  }
`;

export const ZoomIcon = styled(Box)`
  padding: 30%;
  text-align: center;
`;

export const Zoom = styled(Box)`
  background: rgba(4,158,228,.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  transition: all .1s ease;
`;

export const IconZoom = styled(Icon)`
  color: var(--color-white);
  font-size: 40px !important;
  font-weight: 400;
  padding: 3%;
  margin: 6px;
`;

export const ModalContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display:flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    display: initial;
  }
`;

export const ModalContent = styled(Grid)`
  background-color: var(--color-black);
  position: relative;
  padding: 40px 10px;
  max-height: 1600px;
  margin-bottom: 30px;
  max-width: 1200px;
  min-width: 1000px !important;
  @media (max-width: 1000px) {
    min-width: 600px !important;
  }
  @media (max-width: 600px) {
    min-width: 450px !important;
  }
  @media (max-width: 400px) {
    min-width: 320px !important;
  }
  .swiper-pagination  {
    .swiper-pagination-bullet {
      border: 1px solid #fff;
      background-color: var(--color-grey);
      width: 14px;
      height: 14px;
      opacity: 1;
      &-active {
        opacity: 1;
        background-color: var(--color-blue);
      }
    }
  }
`;

export const Detail = styled(P)`
  white-space: pre-line;
  max-height: 400px;
  overflow-y: auto;
  line-height: 1.25;
`;

export const PortfolioDivider = styled(Divider)`
  color: var(--color-grey-1) !important;
`;

export const ButtonClose = styled(Close)`
  position: absolute;
  right: var(--space-3);
  top: var(--space-3);
  z-index:1000;
  cursor: pointer;
  svg {
    color: var(--color-white);
    font-size: var(--text-2xl);
  }
`;

export const SocialIcon = styled.a`
    display: flex !important;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background-color: #bbb;
    border-radius: 18px;
    display: inline-block;
    font-size: 18px;
    line-height: 1.2;
    color: #fff;
    margin-left: 2px;
    margin-right: 2px;
    transition: all .3s ease-in-out;  
`;

export const SecondButtonClose = styled(Box)`
  align-items: center;
  display: flex;
  align-self: right;
  cursor: pointer;
  &:hover {
    * {
    color: var(--color-white);
    }
  }
  * {
    color: var(--color-blue);
    font-weight: bold;
    margin-right: 6px;
  }
`;