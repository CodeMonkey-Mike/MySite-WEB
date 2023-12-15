import React from "react";
import {Container as Instance} from './Style';

export const Container = ({children, height, ...props}: {children: React.ReactChild | React.ReactNode} & any) => {
  return (
    <Instance dataHeight={height} {...props}>
      {children}
    </Instance>
  );
};