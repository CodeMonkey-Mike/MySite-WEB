import _get from 'lodash/get';
import { useQuery } from "@apollo/client";
import { BLOG } from "graphql/query/blog.query";
import { IPost } from 'interfaces';
import { TAGS } from 'graphql/query/tags.query';

export const useBlog = () => {
  const { data: blogPosts, loading: _blogLoading, refetch: _blogRefetch } = useQuery(BLOG, {variables: {page: 1, pageSize: 10,}});
  const { data: tags } = useQuery(TAGS);
  const _blogPosts = _get(blogPosts, 'getPosts.posts', []);
  const _blogPageInfo = _get(blogPosts, 'getPosts.pageInfo', []);
  const _tags = _get(tags, 'getTags.tags', []);
  const otherPosts = (id:string|number) => _blogPosts.filter((p: IPost) => p.id !== Number(id));
  const postDetail = (id:string|number) => _blogPosts.find((p: IPost) => p.id === Number(id) || p.slug === id);
  const tagTitle = (slug:string) => _tags?.find((tg: {slug: string}) => tg.slug === slug)?.title ?? '';
  const isShowLoadmore = _blogPageInfo.totalPages > _blogPageInfo.page;
  return {
    _blogPosts,
    _blogPageInfo,
    _blogLoading,
    _blogRefetch,
    _tags,
    otherPosts,
    postDetail,
    tagTitle,
    isShowLoadmore,
  };
};