import React, { useCallback, useEffect, useState } from 'react';
import { faArrowRight, faBook } from '@fortawesome/free-solid-svg-icons';
import { Box, Button, Icon, Link, P, Text } from 'atoms';
import { useBlog } from 'hooks';
import { IPost } from 'interfaces';
import { Menu, Footer } from 'containers';
import { Heading } from 'components';
import { BlogContainer, Item, List, ItemLink, ImageContainer, ItemImage, DetailContainer, LeftContainer } from './Style';
import _truncate from 'lodash/truncate';
import Default from 'assets/images/default-img.jpg';
import { ListLoader } from './Loader';
import { RightSidebar } from './RightSidebar';

export const categoriesName = {
  finance: 'Finance',
  marketing: 'Marketing',
  engineering: 'Engineering',
};

export const categories = ['finance', 'marketing', 'engineering'];

export const Blog = () => {
  const { _blogPosts, _blogLoading, _blogPageInfo, _blogRefetch, _tags, isShowLoadmore } = useBlog();
  const [data, setData] = useState([]);

  const onLoadMore = useCallback( async () => {
    await _blogRefetch({
      page: _blogPageInfo.page + 1,
      pageSize: 10,
    });
  },[_blogPageInfo, _blogRefetch]);

  useEffect(() => {
    // @ts-ignore
    setData(data => [...data, ..._blogPosts]);
  },[_blogPosts, setData]);

  return (
    <>
    <Menu hideScroll={true}/>
    <BlogContainer padding="20px 0 50px">
      <Heading
      label="Blog"
      icon={faBook}
      sublabel={''}/>
     <DetailContainer maxWidth="1280px" margin="0 auto 50px" display="flex">
     <LeftContainer padding="0 var(--space-12) 0 0">
        {
          !!data.length ? (
            <List gap={4} columns={[2,2,4]} data-aos="fade-up" data-aos-delay='200'>
              {
                data.map( (post: IPost) => (
                  <Item key={post.id}>
                    <ItemLink href={`/blog/${post.slug}`} title={post.anchor_title}>
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
                <P center>The content to be updated!</P>
              )
            }
            </>
          )
        }
        {isShowLoadmore && (
          <Text data-aos="fade-up" data-aos-delay='250' center margin='var(--space-6) 0 0'><Button loading={_blogLoading} variant="primary" size="medium" width='100' onClick={onLoadMore}>Load more</Button></Text>
        )}
        </LeftContainer>
        <RightSidebar categories={categories || []} tags={_tags}/>
      </DetailContainer>
    </BlogContainer>
    <Footer />
    </>
  );
};