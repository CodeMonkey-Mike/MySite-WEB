import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  html {
    box-sizing: border-box;
    height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body{
    margin: 0;
    height: 100%;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Raleway', sans-serif;
    background: var(--color-dark);
  }
  #__next {
    height: 100%;
  }
  h1,h2,h3,h4,h5,h6  { 
    margin: 0;
  }

  p,a,span,button,li,div  { 
    margin: 0;
  }
  ul, ol{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: var(--color-blue);
    word-break: break-all;
  }

  .ReactModal__Overlay {
    opacity: 0;
      transition: opacity 200ms ease-in-out;
  }

  .ReactModal__Overlay--after-open{
      opacity: 1;
  }

  .ReactModal__Overlay--before-close{
      opacity: 0;
  }

  @media screen and (max-width: 999px) {
    [data-aos-delay] {
      transition-delay: 0s !important;
    }
  }

  :root {
    /* colors */
    --color-transparent: transparent;
    --color-white: #ffffff;
    --color-black: #000000; 
    --color-dark: #222222; 
    --color-light-green: #c4d3bd;
    --color-green: #3caa4b;
    --color-grey-1: #cccccc; 
    --color-grey-2: #a3a3a3; 
    --color-grey-3: #f4f4f4; 
    --color-grey-4: #dddddd; 
    --color-grey-5: #8f8f8f; 
    --color-dark-green: #83a851; 
    --color-blue: #3498db;
    --color-link: #83a851; 
    --color-link-active: #293c0f;
    --color-link-active-top: #293c0f;
    --color-link-active-bottom: #759648;
    --color-link-hover: #293c0f;
    --color-orange: #DFA22C;
    --color-brown: #C59C70;
    --color-brown-dark: #9A7047;
    --color-error: rgb(255, 0, 0);
  
    /* button hover colors */ 
    --hover-grey: #e3e4e7;
    --hover-light-grey: #f9f9fe;
    --hover-white: #f5f5f5;
    --hover-dark: rgba(255, 255, 255, 0.04); 
   
    /* font-size */
  
    /* 10px */
    /* Text0 */
    --text-xxs: 0.625rem;
  
    /* 12px */
    /* Text1 */
    --text-xs: 0.75rem;
  
    /* 14px */
    /* Text2 */
    --text-sm: 0.875rem;
  
    /* 16px */
    /* Text3 */
    --text-base: 1rem;
  
    /* 18px */
    /* Text4 */
    --text-lg: 1.125rem;
  
    /* 20px */
    /* Text5 */
    --text-xl: 1.25rem;
    
    /* 22px */
    /* Text5 */
    --text-1xl: 1.375rem;
  
    /* 24px */
    /* Text6 */
    --text-2xl: 1.5rem;
  
    /* 30px */
    /* Text7 */
    --text-3xl: 1.875rem;
  
    /* 36px */
    /* Text8 */
    --text-4xl: 2.25rem;
    
    /* 40px */
    /* Text9 */
    --text-5xl: 2.5rem;
  
    /* 48px */
    /* Text10 */
    --text-6xl: 3rem; 
  
    /* font weight */
    /* --font-hairline: 100; */
    /* --font-extralight: 200; */
    --font-light: 300;
    --font-normal: 400;
    /* --font-medium: 500; */
    --font-semibold: 600;
    --font-bold: 700;
    /* --font-extrabold: 800; */
    --font-black: 900;
  
    /* line height */
    --leading-none: 1;
    /* --leading-tight: 1.25; */
    --leading-normal: 1.5;
    --leading-loose: 2;
  
    /* Letter Spacing */
    /* --tracking-tight: -0.05em; */
    --tracking-normal: 0;
    /* --tracking-wide: 0.05em; */
  
    /* Spacing */
    --space-px: 1px;
    --space-0: 0;
    /* 4px */
    --space-1: 0.25rem;
    /* 8px */
    --space-2: 0.5rem;
    /* 12px */
    --space-3: 0.75rem;
    /* 16px */
    --space-4: 1rem;
    /* 20px */
    --space-5: 1.25rem;
    /* 24px */
    --space-6: 1.5rem;
    /* 28px */
    --space-7: 1.75rem;
    /* 32px */
    --space-8: 2rem;
    /* 36px */
    --space-9: 2.25rem;
    /* 40px */
    --space-10: 2.5rem;
    /* 44px */
    --space-11: 2.75rem;
    /* 48px */
    --space-12: 3rem;
    /* 52px */
    --space-13: 3.25rem;
    /* 56px */
    --space-14: 3.5rem;
    /* 60px */
    --space-15: 3.75rem;
    /* 64px */
    --space-16: 4rem;
    /* 68px */
    --space-17: 4.25rem;
    /* 72px */
    --space-18: 4.5rem;
    /* 76px */
    --space-19: 4.75rem;
    /* 80px */
    --space-20: 5rem;
  
    /* Border */
    --border-default: 1px;
    --border-0: 0;
    --border-2: 2px;
    --border-4: 4px;
    --border-8: 8px;
    --border-16: 16px;
    --border-20: 20px;
  
    /* Border Radius */
    --round-none: 0;
    --round-sm: 0.125rem;
    --round-default: 0.25rem;
    --round-lg: 0.5rem;
    --round-full: 9999px;
  
    /* zindex */ 
  
    /* zindex helpers */
    --zindex-hidden: -10; 
  
    /* Components */
    --zindex-5: 5; 
    --zindex-10: 10; 
    --zindex-1000: 1000; 
  }

  .porfolio-swiper.swiper-slide{
    width: 100% !important;
  }
`;
