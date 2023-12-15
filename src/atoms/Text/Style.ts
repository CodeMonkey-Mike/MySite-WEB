import styled, { css } from 'styled-components';

interface IText {
  width?: string;
  maxWidth?: string;
  margin?: string;
  padding?: string;
  center?: boolean;
  size?: string;
  lineHeight?: number;
  grey?: boolean;
  blue?: boolean;
  white?: boolean;
  danger?: boolean;
  uppercase?: boolean;
  bold?: boolean;
  forceSize?: boolean;
  weight?: number | string;
  filterImg?: boolean;
}

export const P = styled.div<IText>`
  font-size: ${({ size }) => (size ? `${size}` : 'var(--text-base)')};
  margin: ${({ margin }) => (margin ? `${margin}` : '0')};
  padding: ${({ padding }) => (padding ? `${padding}` : '0')};
  ${({ center }) => center && `text-align: center`};
  width: ${({ width }) => (width ? `${width}` : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}` : 'none')};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}` : 1)};
  ${({grey}) => grey && 'color: var(--color-grey-1);'}
  ${({ blue }) => blue && `color: var(--color-blue)`};
  ${({ white }) => white && `color: var(--color-white)`};
  ${({ danger }) => danger && `color: var(--color-error)`};
  ${({ uppercase }) => uppercase && `text-transform: uppercase`};
  ${({ bold }) => bold && `font-weight: bold`};
  @media (min-width: 1400px) {
    ${({forceSize}) => !forceSize ? 'font-size: 20px;' : ''}
  }
  @media (min-width: 1800px) {
    font-size: var(--text-2xl);
  }
  ${({ filterImg }) => filterImg && css`
    img {
      display: none;
    }
  `};
  word-break: break-word;
`;

export const Text = styled.span<IText>`
  display: block;
  font-size: ${({ size }) => (size ? `${size}` : 'var(--text-base)')};
  margin: ${({ margin }) => (margin ? `${margin}` : '0')};
  padding: ${({ padding }) => (padding ? `${padding}` : '0')};
  ${({ center }) => center && `text-align: center`};
  width: ${({ width }) => (width ? `${width}` : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}` : 'none')};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}` : 1)};
  ${({ grey }) => grey && 'color: var(--color-grey-1);'}
  ${({ blue }) => blue && `color: var(--color-blue)`};
  ${({ white }) => white && `color: var(--color-white)`};
  ${({ danger }) => danger && `color: var(--color-error)`};
  ${({ uppercase }) => uppercase && `text-transform: uppercase`};
  ${({ bold }) => bold && `font-weight: bold`};
  @media (min-width: 1400px) {
    font-size: 20px;
  }
  @media (min-width: 1800px) {
    font-size: var(--text-2xl);
  }
`;

export const H1 = styled.h1<IText>`
  font-size: ${({ size }) => (size ? `${size}` : 'var(--text-5xl)')};
  margin: ${({ margin }) => (margin ? `${margin}` : '0')};
  padding: ${({ padding }) => (padding ? `${padding}` : '0')};
  ${({ center }) => center && `text-align: center`};
  ${({ blue }) => blue && `color: var(--color-blue)`};
  ${({ white }) => white && `color: var(--color-white)`};
  ${({ uppercase }) => uppercase && `text-transform: uppercase`};
  width: ${({ width }) => (width ? `${width}` : 'auto')};
  font-weight: ${({ weight }) => (weight ? `${weight}` : 'bold')};
`;

export const H2 = styled.h2<IText>`
  font-size: ${({ size }) => (size ? `${size}` : 'var(--text-lg)')};
  margin: ${({ margin }) => (margin ? `${margin}` : '0')};
  padding: ${({ padding }) => (padding ? `${padding}` : '0')};
  ${({ center }) => center && `text-align: center`};
  ${({ blue }) => blue && `color: var(--color-blue)`};
  ${({ white }) => white && `color: var(--color-white)`};
  ${({ uppercase }) => uppercase && `text-transform: uppercase`};
  width: ${({ width }) => (width ? `${width}` : 'auto')};
  font-weight: ${({ weight }) => (weight ? `${weight}` : 'bold')};
`;

export const H3 = styled.h3<IText>`
  font-size: ${({ size }) => (size ? `${size}` : 'var(--text-sm)')};
  margin: ${({ margin }) => (margin ? `${margin}` : '0')};
  padding: ${({ padding }) => (padding ? `${padding}` : '0')};
  ${({ center }) => center && `text-align: center`};
  ${({ blue }) => blue && `color: var(--color-blue)`};
  ${({ white }) => white && `color: var(--color-white)`};
  ${({ uppercase }) => uppercase && `text-transform: uppercase`};
  width: ${({ width }) => (width ? `${width}` : 'auto')};
  font-weight: ${({ weight }) => (weight ? `${weight}` : 'bold')};
  @media (min-width: 1400px) {
    font-size: 22px;
  }
`;
