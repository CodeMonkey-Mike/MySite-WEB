import React from 'react';
import * as Scroll from 'react-scroll';
import { IconButton as IconInstance, Close } from 'theme-ui';
import styled from 'styled-components';
import { buttonStyle, colorStyle, buttonSize } from 'theme/customVariant'; 
import { LoadingIcon } from 'components/LoadingIcon';

export const ScrollLink = Scroll.Link;

export interface IButtonProps {
  children?: React.ReactChild | React.ReactNode;
  onClick?: (e: any) => void;
  color?: string;
  variant?: string;
  size?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
}

const ButtonStyled = styled.button<IButtonProps>`
  cursor: pointer;
  ${buttonStyle}
  ${colorStyle}
  ${buttonSize}
  width: ${({ width }) => (width ? width : '100%')};
  ${({ disabled }) => (disabled ? 'pointer-events: none; opacity: 0.6;' : '')}
  &:hover {
    opacity: 0.6;
  }
`;

export const Button = ({ children, onClick, loading, ...props }: IButtonProps) => {
  if(loading) {
    return <LoadingIcon />;
  }
  return (
    <ButtonStyled onClick={onClick} {...props}>
      {children}
    </ButtonStyled>
  );
};

export const IconButton = ({ children, onClick, ...props }: IButtonProps) => {
  return (
    <IconInstance onClick={onClick} {...props}>
      {children}
    </IconInstance>
  );
};

export const ButtonClose = ({ onClick, ...props }: Omit<IButtonProps, 'children'>) => (
  <Close onClick={onClick} {...props} />
);

export const ButtonLink = styled(Button)`
  cursor: pointer;
    border-width: 4px;
    border-style: solid;
    border-color: #3498db;
    border-radius: 4px;
    background-color: #3498db;
    transition: all 0.35s ease;
    color: #ffffff;
    height: 60px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
    padding-bottom: 18px;
    font-size: 20px;
    font-weight: 600;
    min-width: 200px;
    text-align: center;
    width: auto;
    &:hover {
      background-color: transparent;
    }
    @media (min-width: 1800px) {
      font-size: 26px;
      padding: 20px;
      height: auto;
    }
`;

const ScrollInstance = styled(ScrollLink)`
  cursor: pointer;
    border-width: 4px;
    border-style: solid;
    border-color: #3498db;
    border-radius: 4px;
    background-color: #3498db;
    transition: all 0.35s ease;
    color: #ffffff;
    height: 60px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
    padding-bottom: 18px;
    font-size: 20px;
    font-weight: 600;
    min-width: 200px;
    text-align: center;
    &:hover {
      background-color: transparent;
    }
    @media (min-width: 1800px) {
      font-size: 26px;
      padding: 20px;
      height: auto;
    }
`;

export const ScrollButton = ({ children, onClick, href, to, target, spy, smooth,...props }: {children:any} & Scroll.ScrollLinkProps<any>) => {
  return (
    <ScrollInstance
      className="scroll-button"
      href={href}
      to={to}
      spy={spy}
      smooth={smooth}
      duration={500}
      delay={100}
      onClick={onClick} {...props}>
      {children}
    </ScrollInstance>
  );
};