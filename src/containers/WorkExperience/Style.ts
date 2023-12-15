import styled from "styled-components";
import { Box, Grid } from "atoms";
import { Container } from 'components';

export const WContainer = styled(Container)`
  @media (min-width: 1800px) {
    max-width: 1600px;
  }
`;

export const WorkExpContent = styled(Grid)`
    position: relative;
    width: 100%;
    color: var(--color-white);
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
`;

export const Title = styled.strong`
  font-size: var(--text-base);
  display: block;
  @media (min-width: 1800px) {
    font-size: 24px;
  }
`;

export const WorkDate = styled.span`
  color: var(--color-white);
  font-size:var(--text-sm);
  margin: var(--space-2) 0 var(--space-2) 0;
  font-weight: bold;
  display: block;
  @media (min-width: 1400px) {
    font-size: 22px;
  }
  @media (min-width: 1800px) {
    font-size: 28px;
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

export const Content = styled(Box)<{half?:boolean}>` 
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 30px;
  box-sizing: border-box;
  @media (min-width: 1800px) {
    h3 {
      font-size: 28px;
    }
  }
  ${({half}) => half && 'width: 50%;'}
  &:hover {
    .blue {
      color: var(--color-blue);
      transition: all .3s ease-in-out;
      &.left {
        border-color: transparent var(--color-blue) transparent transparent;
      }
      &.right {
        border-color: transparent transparent transparent var(--color-blue);
      }
    }
  }
`;

export const Left = styled.div` 
  text-align: right;
  margin-right: 30px;
  margin-top: 46px;
`;

export const Arrow = styled.div<{right?:boolean}>`
    border-style: solid;
    border-width: 20px;
    width: 0;
    height: 0;
    position: absolute;
    transition: all .3s ease-in-out;
    ${
      ({right}) => right ? `
      border-color: transparent transparent transparent var(--color-grey-1);
      left: 0;
      top: 0;
      ` : `
      border-color: transparent var(--color-grey-1) transparent transparent;
      right: 0;
      top: 40px;
      `
    }
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
export const Right = styled.div` 
  text-align: left;
  margin-left: 30px;
  margin-top: 6px;
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