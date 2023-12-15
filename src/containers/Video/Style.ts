import { Box, Flex, H1, P, Icon, Image } from "atoms";
import { Container } from "components";
import styled from "styled-components";
import ReactPlayer from 'react-player';

export const VideoContainer = styled(Container)`
  position: relative;
`;

export const VideoContent = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  color: var(--color-white);
`;

export const ModalVideoPlayer = styled(ReactPlayer)`
  display: block;
  width: 100%;
  background-color: #000;
  z-index: 0;
`;
export const Signature = styled(Image)`
  @media (max-width: 767px) { 
    width: 200px;
  }
`;

export const VideoPlayer = styled.video`
  display: block;
  width: 100%;
  opacity: .8;
  background-color: #000;
  z-index: 0;
`;

export const VideoPlay = styled(Flex)`
  justify-content: center;
  padding: 80px;
  @media (max-width: 1024px) {
    position: static; 
    z-index: 50;
    padding: 30px 0 0;
  }
  @media (max-width: 767px) { 
    padding: 10px 0 0;
  }
`;

export const VideoPlayIcon = styled(Icon)`
  font-size:120px;
  cursor: pointer;
  transition: all 0.03s ease;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 1024px) {
    font-size:90px;
    }
  @media (max-width: 767px) {
    font-size:50px;
    }
`;

export const VideoHeading = styled(H1)`
  font-size: 120px;
  font-weight: 100;
  line-height: 1;
  @media (max-width: 1024px) {
    font-size:90px;
  }
  @media (max-width: 767px) {
    font-size: 38px;
    margin-top: 20px;
  }
`;

export const VideoSubHeading = styled(P)`
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 0;
  @media (max-width: 1023px) {
    font-size:26px;
    margin-top:20px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    margin-top: 10px;
  }
`;
export const ModalContentWrapper = styled.div`
  display:flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const ModalContent = styled(Box)`
  border-radius: var(--border-8);
  padding: 0 var(--space-3);
  background: var(--color-white);
  min-width: 600px;
  min-height: 400px;
  position: relative;
  @media (max-width: 767px) { 
    padding-bottom: 20px !important;
    width: 500px;
    min-height: 350px;
    overflow: hidden; 
  }
  @media (max-width: 500px) { 
    padding-bottom: 10px !important;
    width: 400px;
    min-height: 300px;
    overflow: hidden; 
  }
`;