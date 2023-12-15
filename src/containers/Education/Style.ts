import { Box, Grid } from "atoms";
import { Container } from "components";
import styled from "styled-components";

export const Center = styled(Container)`
  @media (min-width: 1800px) {
    max-width: 1600px;
  }
  &.education-timeline {
    display: table;
    position: relative;
    width: 100%;
    &:before {
      background-color: var(--color-grey-1);
      left: 50%;
      position: absolute;
      top: 0;
      width: 1px;
      bottom: 0;
      z-index: 0;
      content: "";
    }
  }
  
`; 

export const EducationContent = styled(Grid)`
  padding-bottom: 60px; 
  &:hover {
    .divider {
      transition: all .3s ease-in-out;
      background-color: var(--color-blue);
      color: var(--color-white);
    }
    .timeline {
      transition: all .3s ease-in-out;
      color: var(--color-blue);
    }
  }
`;
export const Left = styled(Box)` 
  padding: 0 var(--space-3);
`;
export const Divider = styled.div`
  float: right;
  margin: -6px -33px 0 0;
  background-color: var(--color-grey-1);
  border-radius: 20px;
  height: 40px;
  width: 40px;
  padding-top: 10px;
  text-align: center;
  z-index: 2;
  position: relative;
`;
export const Right = styled(Box)` 
  padding: 0 var(--space-3);
`;
interface IText {
  margin?: string;
  align?: 'right' | 'left';
  blue?: boolean;
}
export const TextGroup = styled.div<IText>`
  ${({margin}) => margin && `margin: ${margin};`}
  text-align: ${({align}) => align ? align : 'left'};
  color: ${({blue}) => blue ? 'var(--color-blue)' : 'var(--color-white)'};
  div {
    line-height: 1.3;
  }
  @media (min-width: 1800px) {
    h3 {
      font-size: var(--text-3xl);
    }
  }
`;

export const LineBottom = styled.hr`
  width: 30px;
  margin: -30px auto 0;
  padding: 0;
  border-color: transparent transparent #ccc;
  border-style: solid;
  border-width: 30px;
  box-sizing: content-box;
`;