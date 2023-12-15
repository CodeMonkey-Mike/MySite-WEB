import _get from 'lodash/get';
import { useQuery } from "@apollo/client";
import { BLOG } from "graphql/query/blog.query";

export const useCategory = (category: string | undefined) => {
  const { data: blogPosts, loading: _blogLoading, refetch: _blogRefetch } = useQuery(BLOG, {variables: {page: 1, pageSize: 10, category,}});
  const _blogPosts = _get(blogPosts, 'getPosts.posts', []);
  const _blogPageInfo = _get(blogPosts, 'getPosts.pageInfo', []);
  const isShowLoadmore = _blogPageInfo.totalPages < _blogPageInfo.page;
  return {
    _blogPosts,
    _blogPageInfo,
    _blogLoading,
    _blogRefetch,
    isShowLoadmore,
  };
};