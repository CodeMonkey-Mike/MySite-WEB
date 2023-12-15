import React from 'react';
import {PreloaderContainer} from './Style';

export const Preloader = ({loading}: {loading:boolean}) => {
  return loading ? 
  <PreloaderContainer>
    <div className="preloader">
      <div className="cube1" />
      <div className="cube2" />
    </div>
  </PreloaderContainer> : null;
};