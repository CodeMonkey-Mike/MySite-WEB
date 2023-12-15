import { Box, Flex } from "atoms";
import { Container } from "components";
import styled from "styled-components";
import bg from 'assets/images/bgd1.jpg'; 

export const FixedBackground = styled(Box)`
    background: url(${bg}) 50% 0/cover repeat-y fixed;
`;

export const Left = styled(Box)`
    text-align: right;
    padding: 10px;
`;

export const TextGroup = styled.div`
  font-size: 14px;
  margin-bottom: 30px;
  color: var(--color-grey-1);
  span {
    &.txt-main {
      font-size: 20px;
      font-weight: 600;
      display: block;
      white-space: pre-wrap;
    }
  }
`;
export const Center = styled(Container)`
  /* .swiper-button-prev { 
    color: var(--color-grey-1);
  }
  .swiper-button-next { 
    color: var(--color-grey-1);
  } */
  .swiper-container {
    padding-bottom: var(--space-10);
  }
  .swiper-pagination {
    bottom: 0;
    .swiper-pagination-bullet {
      width: var(--space-3);
      height: var(--space-3);
    }
  }
  @media (min-width: 1800px) {
    max-width: 1600px;
  }
`;
export const Right = styled(Box)`
  text-align: left;
  padding: 10px;
`;

export const SlideContent = styled(Flex)`
  align-items: center;
  flex-direction: column;
  text-align: center;
  .skill-name {
    font-size: var(--text-xl);
    color: var(--color-white);
    font-weight: var(--font-normal);
    margin-top: var(--space-3);
    @media (min-width: 1800px) {
      font-size: var(--text-1xl);
    }
  }
  @media (min-width: 1800px) {
    zoom: 1.2;
  }
`; 