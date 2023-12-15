import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Image } from 'atoms';
import imgSrc from 'assets/images/mn-videos-image.png';
import { YOUTUBES } from 'graphql/query/youtubes.query';
import { useQuery } from '@apollo/client';
import _get from 'lodash/get';


const Center = styled.div`
  text-align: center;
  background: white;
  height: 100%;
  padding-top: 100px;
`;
const Title = styled.div`
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const SubTitle = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;
const AvartaImage = styled(Image)`
  border-radius: 100%;
  max-width: 182px;
`;
const RedirectLink = styled.a`
  font-size: 16px;
`;

const Index: React.FC<{id:string}> = ({id}) => {
  const { push} = useRouter();
  const { data } = useQuery(YOUTUBES);
  const youtubes = _get(data, 'getYoutubes.youtubes', []);
  const [timer, setTimer] = useState(5);

  const video = useMemo(() => {
    // Manage video cases
    if(!youtubes.length) {
      return null;
    }
    const video = youtubes.find((yt: {code: string}) => yt.code === id);
    return video;
  }, [id, youtubes]);

  useEffect(() => {
    const countDownTimer = setInterval(() => setTimer(prv => --prv), 1000);
    return () => {
      clearInterval(countDownTimer);
    };
  },[video?.url]);

  useEffect(() => {
    if(Number(timer) === 0 && video.url) {
      push(video.url);
    }
    if(Number(timer) === 3 && !video?.url) {
      push(window.location.origin);
    }
  },[timer, video, push]);


  if(!video?.title || !video?.url) return null;
  
  return  (
    <>
      <Head>
        <title>{video.title}</title>
        <link rel="canonical" href={video.url} />
      </Head>
      <Center>
        <AvartaImage src={imgSrc} />
        <Title>Redirecting to the CodeMonkey Mike Channel in {timer < 4 ? timer : '0'} seconds.</Title>
        <SubTitle>Or <RedirectLink href={video.url || '/'}>click here now</RedirectLink></SubTitle>
      </Center>
    </>
  );
};

// @ts-ignore
export async function getServerSideProps({query}) {
  return {
    props: {
      id: query.id
    },
  };
}


export default Index;
