import styled from "styled-components";
import { Container } from "components";
import {  ScrollButton } from "atoms";

export const FooterContainer = styled(Container)`
  background-color: var(--color-black);
  width: 100%;
`;

export const FooterContent = styled(Container)`
  width: 100%;
  padding: 50px 0;
  color: var(--color-white);
  margin: 0 auto;
  text-align: center;
`;

export const FooterIcon = styled(ScrollButton)`
  font-size: var(--text-xl);
  border-radius: 100%;
  width: 50px;
  height: 50px;
  padding: 10px 0;
  display: inline-block;
  min-width: unset;
  border-width: 1px;
`;

export const FooterDivider = styled.div`
  width: 100px;
  margin: var(--space-8) auto !important;
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  color: gray;
  margin: 0;
  margin-top: 8px;
  margin-bottom: 8px;
  border: 0;
  border-bottom: 1px solid;
  color: white;
`;