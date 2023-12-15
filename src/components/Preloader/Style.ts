import { Box } from "atoms";
import styled, {keyframes} from "styled-components";

const cubemove = keyframes `
  25% {
      transform: translateX(42px) rotate(-90deg) scale(.5);
      -webkit-transform: translateX(42px) rotate(-90deg) scale(.5);
  }

  50% {
      transform: translateX(42px) translateY(42px) rotate(-179deg);
      -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
  }

  50.1% {
      transform: translateX(42px) translateY(42px) rotate(-180deg);
      -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  }

  75% {
      transform: translateX(0) translateY(42px) rotate(-270deg) scale(.5);
      -webkit-transform: translateX(0) translateY(42px) rotate(-270deg) scale(.5);
  }

  100% {
      transform: rotate(-360deg);
      -webkit-transform: rotate(-360deg);
  }
`;

export const PreloaderContainer = styled(Box)`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100000;
  background-color: var(--color-blue);
  .preloader {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -40px;
    margin-top: -40px
  }
  .cube1, .cube2 {
    background-color: #fff;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${cubemove} 1.8s infinite ease-in-out;
  }
  .cube2 {
    animation-delay: -.9s;
  }
`;