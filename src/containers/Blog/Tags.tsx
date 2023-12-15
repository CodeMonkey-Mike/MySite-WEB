import React, { useCallback, useEffect, useState } from 'react';
import { faArrowRight, faBook } from '@fortawesome/free-solid-svg-icons';
import { Box, Button, Icon, Link, P, Text } from 'atoms';
import { IPost } from 'interfaces';
import { Menu, Footer } from 'containers';
import { Heading } from 'components';
import { BlogContainer, Center, Item, List, ItemLink, ImageContainer, ItemImage } from './Style';
import _truncate from 'lodash/truncate';
import { ListLoader } from './Loader';
import { useRouter } from 'next/router';
import { useTags } from 'hooks/useTags';

import Default from 'assets/images/default-img.jpg';

export const Tags = () => {
  const {query,push} = useRouter();
  // @ts-ignore
  const { _blogPosts, _blogLoading, _blogPageInfo, _blogRefetch, isShowLoadmore } = useTags(query.tag);
  const [data, setData] = useState([]);

  const onLoadMore = useCallback( async () => {
    await _blogRefetch({
      page: _blogPageInfo.page + 1,
      pageSize: 10,
    });
  },[_blogPageInfo, _blogRefetch]);

  useEffect(() => {
    if(query.tag) {
      // @ts-ignore
      setData(data => [...data, ..._blogPosts]);
    }
  },[_blogPosts, setData, query.tag]);

  return (
    <>
    <Menu hideScroll={true}/>
    <BlogContainer padding="20px 0 50px">
    <Heading
          label="Blog"
          labelAction={() => push('/blog')}
          icon={faBook}
          sideLabel={`> Tag: ${query?.tag}`}
          sublabel=''
        />
      <Center maxWidth="1140px" margin="50px auto" className="education-timeline">
        {
          !!data.length ? (
            <List gap={4} columns={[2,2,4]} data-aos="fade-up" data-aos-delay='200'>
              {
                data.map( (post: IPost) => (
                  <Item key={post.id}>
                    <ItemLink href={`/blog/${post.slug}`}>
                    <ImageContainer>
                      <ItemImage src={post.image && post.image !== 'null' ? post.image : Default} alt={post.title} />
                    </ImageContainer>
                      <P size="var(--text-sm)" margin="16px 0" lineHeight={1.2}>{_truncate(post.title, {length: 150})}</P>
                    </ItemLink>
                    <Box>
                      <Link href={`/blog/${post.slug}`} content="Read more" />
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
                <P center>The content to be updated!</P>
              )
            }
            </>
          )
        }
        {isShowLoadmore && (
          <Text data-aos="fade-up" data-aos-delay='250' center margin='var(--space-6) 0 0'><Button loading={_blogLoading} variant="primary" size="medium" width='100' onClick={onLoadMore}>Load more</Button></Text>
        )}
      </Center>
    </BlogContainer>
    <Footer />
    </>
  );
};