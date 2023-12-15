import React from 'react';
import { IIcon } from 'interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Icon = ({icon, style, margin, padding, ...props }: IIcon) => {
  let styled = {
    ...style,
  };
  if (margin) {
    styled = {
      ...styled,
      margin: margin,
    };
  }
  if (padding) {
    styled = {
      ...styled,
      padding: padding,
    };
  }
  return <FontAwesomeIcon icon={icon} style={styled} {...props} />;
};
