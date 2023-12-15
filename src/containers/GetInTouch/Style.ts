import { Flex } from "atoms"; 
import styled from "styled-components";

export const Center = styled(Flex)` 
  justify-content: center;
  padding: 30px 0;
`; 

export const SocialIcon = styled.a`
  display: inline-block;
  width: 50px;
  border-radius: 25px;
  font-size: 24px;
  line-height: 2.1;
  margin-left: 4px;
  margin-right: 4px; 
  background-color: #3498db;
  text-align: center; 
  &:hover {
    opacity: 0.8;
  }
`; 
 
export const Icon = styled.span` 
  color: var(--color-white);
`; 
