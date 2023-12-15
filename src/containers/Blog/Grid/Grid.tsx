// @ts-nocheck
import React, { useEffect, useMemo, useState } from 'react';
import { faArrowRight, faBook } from '@fortawesome/free-solid-svg-icons';
import { Box, ButtonLink, Flex, Icon, Link, P } from 'atoms';
import { useData } from 'hooks';
import { IPost } from 'interfaces';
import { Container, Heading } from 'components';
import { Center, Item, List, ItemLink, ImageContainer, ItemImage } from '../Style';
import _truncate from 'lodash/truncate';
import _kebabCase from 'lodash/kebabCase';
import { useRouter } from 'next/router';
import Default from 'assets/images/default-img.jpg';
import { ListLoader } from '../Loader';
import { Option, OptionLink, OptionSet, Options } from 'containers/Portfolio/Style';
import { isBrowser } from "containers/Video";
import { removeDuplicate } from 'containers/Portfolio';

export const BlogGrid = () => {
  const [filter, setFilter] = useState < string > ('*');
    const isotope = React.useRef(null);
  const { _blogPosts, _blogLoading } = useData();
  const router = useRouter();
  const data = useMemo(()=> _blogPosts || [],[_blogPosts]);

  useEffect(() => {
    if(!!data.length && isBrowser) {
      setTimeout(()=> {
      isotope.current = new Isotope('.filter-post-container', {
        itemSelector: '.filter-post',
        layoutMode: 'fitRows',
        masonry: {
          columnWidth: '25%'
        }
      });
    },3000);
    }
  }, [isotope, data,]);

  useEffect(() => {
    if(!!data.length && isBrowser) { 
      if(isotope && isotope.current) {
        filter === '*'
          ? isotope.current.arrange({filter: `*`})
          : isotope.current.arrange({filter: `.${filter}`}); 
        }
    }
  }, [filter, isotope, data]);

  const optionSet : Array < string > = useMemo(() => {
    if(data.length) {
      const options = data
        .map(item => item.category).filter(item => item !== null)
        .sort();
      return removeDuplicate(options);
    }
    return [];
  }, [data]);

  return (
    <Container color="var(--color-white)" id="blog" padding="100px 20px">
      <Heading
      label="Blog"
      icon={faBook}
      sublabel={''}/>
      <Center maxWidth="1140px" margin="50px auto 0" className="education-timeline">
        <Options data-aos="fade-up">
          <OptionSet>
              <Option key={0}>
                  <OptionLink onClick={() => setFilter('*')} active={filter === '*'}>ALL</OptionLink>
              </Option>
              {!!optionSet.length && optionSet.map((item : string, idx : number) => (
                  <Option key={`${item}${idx}`}>
                      <OptionLink
                          onClick={() => setFilter(_kebabCase(item))}
                          active={item === _kebabCase(filter)}>{item}</OptionLink>
                  </Option>
              ))}
          </OptionSet>
        </Options>
        {
          !!data.length ? (
            <List gap={4} columns={[2,2,4]} className="filter-post-container" data-aos="fade-up" data-aos-delay='200'>
              {
                data.slice(0, 8).map( (post: IPost) => (
                  <Item customWidth key={post.id} className={`filter-post ${_kebabCase(post.category)}`}>
                    <ItemLink href={`/blog/${post.slug}`} color="var(--color-white)" title={post.anchor_title}>
                    <ImageContainer>
                      <ItemImage src={post.image && post.image !== 'null' ? post.image : Default} alt={post.title} /> 
                    </ImageContainer>
                      <P size="var(--text-sm)" margin="16px 0" lineHeight={1.2}>{_truncate(post.title, {length: 150})}</P>
                    </ItemLink>
                    <Box>
                      <Link href={`/blog/${post.slug}`} content="Read more" title={post.anchor_title}/>
                      <Icon color="var(--color-blue)" icon={faArrowRight} margin="0 0 0 var(--space-1)" />
                    </Box>
                  </Item>
                ))
              }
            </List>
          ) : (
            <>
            {
              _blogLoading ? (
                <ListLoader />
              ) : (
                <P white padding='var(--space-5) 0' center>The content to be updated!</P>
              )
            }
            </>
          )
        }
      </Center>
      <Flex marginTop={50} sx={{justifyContent: 'center'}} data-aos="fade-up">
        <ButtonLink
          onClick={() => router.push('/blog')}
        ><Icon icon={faBook} margin="0 10px 0 0"/>View All</ButtonLink>
        </Flex>
    </Container>
  );
};