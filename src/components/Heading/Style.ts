// import { Box } from "atoms";
import styled from "styled-components";

export const HeadingContainer = styled.div<{white:boolean}>`
  max-width: 780px;
  width: 100%;
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  h2 {
    color: var(--color-blue);
    text-transform: uppercase;
    font-size: var(--text-4xl);
  }
  ${({white}) => white && `
    background-color: transparent !important;
    > * {
      color: var(--color-white) !important;
    }
    svg {
      background: var(--color-blue) !important;
      color: var(--color-white) !important;
      border: var(--border-2) solid var(--color-white);
    }
  `}
  @media (min-width: 1800px) {
    max-width: 980px;
    h2 {
      font-size: var(--text-6xl);
    }
  }
`;
export const Line = styled.div`
  margin-top: 24px;
  margin-bottom: 30px;
  position: relative;
  text-align: center;
  &:after {
    content: "";
    display: block;
    border-top: solid 2px #ccc;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    z-index: 1;
  }
  svg {
    background: #ccc;
    color: #222;
    position: relative;
    z-index: 5;
    padding: 18px;
    width: 70px !important;
    height: 70px;
    border-radius: 35px;
  }
`;
export const SubTitle = styled.div`
  color: var(--color-white);
  font-size: var(--text-xl);
  font-weight: 500;
  @media (min-width: 1400px) {
    font-size: 26px;
  }
  @media (min-width: 1800px) {
    font-size: var(--text-4xl);
  }
`;