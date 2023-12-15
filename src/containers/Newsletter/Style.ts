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

export const CheckBoxContainer = styled(Flex)` 
  justify-content: flex-start;
`; 

export const TopicsCheckBoxGroup = styled.div`
`;

export const TopicsContainer = styled.div`
  margin-top: var(--space-2);
  margin-bottom: var(--space-4);
`;

export const CheckBoxField = styled.input`
  margin-right: var(--space-2);
`;

export const CheckBoxLabel = styled.label<{ml?: string}>`
  color: var(--color-white);
  margin-bottom: var(--space-2);
  ${({ml}) => ml ? 'margin-left: var(--space-2);' : ''}
  display: block;
`;