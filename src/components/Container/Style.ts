import styled from "styled-components";

interface IContainer {
  background?:string;
  backgroundImage?:string;
  padding?:string;
  margin?:string;
  dataHeight?: string;
  width?:string;
  maxWidth?:string;
  display?:string;
}

export const Container = styled.div<IContainer>`
  height: ${({dataHeight}) => dataHeight ? dataHeight : 'auto'};
  width: 100%;
  max-width: ${({maxWidth}) => maxWidth ? maxWidth : 'none'};
  background-image: ${({backgroundImage}) => backgroundImage ? `url(${backgroundImage})` : 'none'};
  background-repeat: repeat;
  background-color: ${({background}) => background ? `var(${background})` : 'transparent'};
  padding: ${({padding}) => padding ? padding : '0'};
  margin: ${({margin}) => margin ? margin : '0'};
  display: ${({display = 'block'}) => display};
`;