import React from 'react';
import { Container } from "components";
import { 
  HeroSlider,
  Menu,
  About,
  MySkills,
  Education,
  Processes,
  WorkExperience,
  Services,
  Portfolio,
  Video,
  Testimonials,
  Awards,
  BlogGrid,
  Download,
  Newsletter,
  Contact,
  GetInTouch,
  Footer,
} from 'containers';
import { useData } from 'hooks';

export const Home = () =>  {
  useData();
  return (
    <Container height="100%">
      <HeroSlider />
      <Menu />
      <About />
      <MySkills />
      <Education />
      <Processes />
      <WorkExperience />
      <Services />
      <Portfolio />
      <Video />
      <Testimonials />
      <Awards />
      <BlogGrid />
      <Download />
      <Newsletter />
      <Contact />
      <GetInTouch />
      <Footer />
    </Container>
);};