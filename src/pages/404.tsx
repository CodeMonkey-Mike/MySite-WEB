import React from 'react';
import { Footer, Menu } from 'containers';
import Head from 'next/head';
import { Container } from 'components';
import { Flex, Icon, P } from 'atoms';
import { BackButton, BlogContainer } from 'containers/Blog/Style';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Index: React.FC = () => {
  return  (
  <>
    <Head>
      <title>Mike Neder</title>
    </Head>
    <Menu hideScroll={true}/>
    <BlogContainer>
    <Container height="100%" maxWidth="1140px" margin="100px auto">
        <Container display="flex" style={{ justifyContent: 'center'}}>
          <P style={{borderRight: "1px solid var(--color-grey-5)"}} padding="var(--space-3)">404</P>
          <P padding="var(--space-3)">This blog article was not found.</P>
        </Container>
        <Flex sx={{
          justifyContent: 'center',
          marginTop: 'var(--space-10)'
        }}>
          <BackButton href="/blog"><Icon icon={faArrowLeft} margin="0 var(--space-3) 0 0" /> Back</BackButton>
        </Flex>
      </Container>
    </BlogContainer>
    <Footer />
  </>
  ); 
};

export default Index;
