import React from 'react';
import Router from 'next/router';
import { LogoBox, LogoImage } from './Logo.style';

type LogoProps = {
  imageUrl: string;
  alt: string;
  onClick?: () => void;
};

export const Logo: React.FC<LogoProps> = ({ imageUrl, alt, onClick }) => {
  function onLogoClick() {
    Router.push('/');
    if (onClick) {
      onClick();
    }
  }
  return (
    <LogoBox onClick={onLogoClick}>
      <LogoImage src={imageUrl} alt={alt} />
    </LogoBox>
  );
};
 
