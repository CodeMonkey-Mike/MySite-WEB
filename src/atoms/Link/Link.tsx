import React from "react";
import styled from "styled-components";

interface ILink {
  href: string;
  content: string;
  target?:string;
  style?: React.CSSProperties;
  white?:boolean;
}

const Instance = styled.a`
  text-underline-offset: 5px;
  &:hover {
    text-decoration: underline;
  }
  @media (min-width: 1800px) {
    font-size: 24px;
  }
`;

export const Link = ({
  content,
  target = '_parent',
  white = false,
  style,
  ...props
}: ILink & any) => {
  let defaultStyle = {
    wordBreak: 'break-word',
  };
  if(white) {
    defaultStyle = {
      ...style,
      color: 'var(--color-white)',
    };
  }
  return (
    <Instance target={target} {...props} style={defaultStyle}>{content}</Instance>
  );
};