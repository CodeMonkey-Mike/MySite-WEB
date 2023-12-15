import { Grid, Box , P} from "atoms";
import styled from "styled-components";

export const Left = styled(Box)`
    text-align: right;
    padding: 10px;
    @media (max-width: 1023px) {
      text-align: center;
    }
`;

export const AboutContainer = styled(Grid)`
  @media (max-width: 768px) {
    width: 100%;
    display: flex !important;
    flex-direction: column;
  }
`;

export const TextGroup = styled.div`
  font-size: 14px;
  margin-bottom: 30px;
  color: var(--color-grey-1);
  span {
    &.txt-main {
      font-size: 18px;
      font-weight: 600;
      display: block;
      white-space: pre-wrap;
      text-transform: uppercase;
    }
  }
  
  @media (min-width: 1800px) {
    font-size: 28px;
    span {
      &.txt-main {
        font-size: 30px;
      }
    }
  }
  @media (min-width: 1600px) {
    font-size: 24px;
    span {
      &.txt-main {
        font-size: 28px;
      }
    }
  }
  @media (min-width: 1400px) {
    font-size: 20px;
    span {
    &.txt-main {
      font-size: 24px;
    }
  }
  }
  
`;
export const Center = styled(Box)`
  .swiper-button-prev { 
    color: var(--color-grey-1);
  }
  .swiper-button-next { 
    color: var(--color-grey-1);
  }  
  
  @media (min-width: 1024px) {
    min-width: 420px !important;
  }
  @media (max-width: 1023px) {
    max-width: 80% !important;
    margin: 0 auto !important;
  }
`;
export const Right = styled(Box)`
  text-align: left;
  padding: 10px;
  @media (max-width: 1023px) {
    text-align: center;
  }
`;

export const SlideContent = styled(Box)`
  padding-left: var(--space-14);
  padding-right: var(--space-14);
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  max-width: 100%;
  img {
    width: 100%;
    border-radius: 100%;
  }
`; 

export const AboutDesc = styled(P)`
  @media (min-width: 1400px) {
    font-size: 22px;
  }
  @media (min-width: 600px) {
    font-size: 20px;
  }
  @media (min-width: 1800px) {
    max-width: 770px;
    font-size: 32px;
  }
`;