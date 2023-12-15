import { Box, P } from "atoms";
import { Container } from "components";
import styled from "styled-components";

export const Left = styled(Box)`
    text-align: right;
    padding: 10px;
`;

export const ProcessItem = styled.div`
  width: 160px;
  height: 160px;
  background: #fff;
  border-radius: 80px;
  position: relative;
  margin-bottom: 30px;
  padding-top: 42px;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  margin-left: 15px;
  margin-right: 15px;
  transition: all .3s ease-in-out;
  &:hover {
    background: var(--color-blue);
    * {
      color: var(--color-white);
    }
  }
  @media (max-width: 767px) { 
    width: 130px;
    height: 130px;
    padding-top: 30px;
    font-size: 18px;
  }
  @media (min-width: 1800px) {
    zoom: 1.2;
  }
`;
export const ProcessTitle = styled(P)` 
  text-align: center;
  font-weight: bold;
`;
export const ProcessIcon = styled.span` 
  font-size: 50px;
  margin-bottom: var(--space-4);
  @media (max-width: 767px) { 
    font-size: 40px;
  }
`;
export const Center = styled(Container)` 
   text-align: center;
   @media (min-width: 1800px) {
      max-width: 1600px;
    }
`;