import {BoxProps } from 'theme-ui';

export interface IBox extends BoxProps {
  rounded?: boolean;
  white?: boolean;
  border?: boolean;
  flex?: boolean;
  relative?: boolean;
}

export const Box = ({ rounded, white, border, flex, relative, style, pl, mb, pb, ...props }: IBox) => {
  let defaultStyle = {
    ...style,
  };
  if (rounded) {
    defaultStyle = {
      ...defaultStyle,
      borderRadius: 'var(--border-4)',
    };
  }
  if (white) {
    defaultStyle = {
      ...defaultStyle,
      backgroundColor: 'var(--color-white)',
    };
  }
  if (border) {
    defaultStyle = {
      ...defaultStyle,
      border: '1px solid var(--color-grey-1)',
    };
  }
  if (flex) {
    defaultStyle = {
      ...defaultStyle,
      display: 'flex',
    };
  }
  if (relative) {
    defaultStyle = {
      ...defaultStyle,
      position: 'relative',
    };
  }
  if (pl) {
    defaultStyle = {
      ...defaultStyle,
      paddingLeft: `${String(pl)}px`,
    };
  }
  if (mb) {
    defaultStyle = {
      ...defaultStyle,
      marginBottom: `var(${String(mb)})`,
    };
  }
  if (pb) {
    defaultStyle = {
      ...defaultStyle,
      paddingBottom: `var(${String(pb)})`,
    };
  }
  // @ts-ignore
  return <div style={defaultStyle} {...props} />;
};
