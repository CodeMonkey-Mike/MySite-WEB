import React, { useEffect, useMemo, useState, useRef } from "react";
import {
  VideoContainer,
  VideoContent,
  VideoPlayer,
  VideoHeading,
  VideoSubHeading,
  VideoPlay,
  VideoPlayIcon,
  ModalVideoPlayer,
  ModalContent,
  Signature,
  ModalContentWrapper,
} from "./Style";
import { ButtonClose } from "atoms";
import video from "assets/videos/back.mp4";
import videoWebm from "assets/videos/back.webm";
import sign from "assets/images/signaturemn.png";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "components";
import { useData } from "hooks";

export const isBrowser = typeof window !== "undefined";
export const Video = () => {
  const {_video} = useData(); 
  const [openModal,setOpenModal] = useState(false);
  const url = useMemo(()=> _video?.url,[_video]);
  const videoRef = useRef(null);

  useEffect(()=>{
    isBrowser && window.addEventListener('load', () => {
      // @ts-ignore
      if(videoRef) videoRef.current.play();
    });
  },[]);
  return (
    <VideoContainer id="video" padding="0"> 
      <VideoContent>
        <VideoHeading blue data-aos="fade-down" data-aos-delay='100'>
          VIDEO
        </VideoHeading>
        <VideoSubHeading data-aos="fade-up" data-aos-delay='150'>
          HTML5 / SELF HOSTED VIDEO
        </VideoSubHeading>
        <VideoPlay data-aos="zoom-in" data-aos-delay='150'>
          <VideoPlayIcon icon={faPlayCircle} onClick={()=>setOpenModal(true)}/>
        </VideoPlay>
        <Signature src={sign} data-aos="fade-up" data-aos-delay='150' alt=""/>
      </VideoContent>   
      <VideoPlayer autoPlay muted loop ref={videoRef}>
        <source src={video} type="video/mp4" />
        <source src={videoWebm} type="video/webm" />
      </VideoPlayer>
      {url && (
      <Modal 
        isOpen={openModal}
        onRequestClose={()=>setOpenModal(false)}
      >
        <ModalContentWrapper>
        <ModalContent>
          <ButtonClose onClick={
            ()=>setOpenModal(false)
          } />
          <ModalVideoPlayer url={url} config={{
          youtube: {
            playerVars: { origin: 'https://www.youtube.com' }
          }
        }}/>
        </ModalContent>
        </ModalContentWrapper>
      </Modal>
      )}
    </VideoContainer>
  );
};