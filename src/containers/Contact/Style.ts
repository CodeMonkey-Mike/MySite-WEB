import { P, Box } from "atoms";
import styled from "styled-components";

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
export const Center = styled(Box)`
  .swiper-button-prev { 
    color: var(--color-grey-1);
  }
  .swiper-button-next { 
    color: var(--color-grey-1);
  }
`;
export const Right = styled(Box)`
  text-align: left;
  padding: 10px;
`;

export const PText = styled(P)`
  @media (max-width: 767px) {
    font-size: 20px;
    }
`;

export const Line = styled.div`
  height: 4px;
  background: var(--color-white);
  width: 100px;
  margin: 100px auto;
`;

export const Form = styled.form<{mt?: string}>`
  max-width: 550px;
  margin: 100px auto;
  ${({mt}) => mt && `margin-top: ${mt};`}
  @media (min-width: 1800px) {
    > :not(.rpt) {
      zoom: 1.2;
    }
    max-width: 650px;
  }
`; 

export const IconContainer = styled.span<{dataHeight?:number}>`
    width: 40px;
    height: ${({dataHeight}) => dataHeight ? `${dataHeight}px` : '40px'};
    display: inline-block;
    background: var(--color-grey-1);
    vertical-align: top;
    padding: 12px;
    svg {
      color: var(--color-grey-3);
      ${({dataHeight}) => dataHeight && `margin-top: ${dataHeight/2 - 20}px;`};
    }
`; 

export const FieldGroup = styled.div`
  margin-bottom:var(--space-4);
`; 

export const Field = styled.input<{error?:boolean}>`
  padding: 5px 10px;
  height: 40px;
  outline: none;
  background: var(--color-white);
  border: 1px solid ${({error = false}) => !error ? 'var(--color-white)' : 'var(--color-error)'};
  width: calc(100% - 40px);
  font-size: var(--text-base);
`; 

export const CommentField = styled.textarea<{error?:boolean}>`
  padding: 5px 10px;
  height: 40px;
  outline: none;
  background: var(--color-white);
  border: 1px solid ${({error = false}) => !error ? 'var(--color-white)' : 'var(--color-error)'};
  width: calc(100% - 40px);
  font-size: var(--text-base);
  min-height: 150px;
`; 

export const ErrorMessage = styled.p`
  margin-top: 5px;
  color: var(--color-error);
  font-size: var(--text-sm);
`; 