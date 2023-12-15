import { gql } from '@apollo/client';

export const BLOG = gql`
  query getPosts($page: Int, $pageSize: Int, $tag: String, $category: String){
    getPosts(page: $page, pageSize: $pageSize, tag: $tag, category: $category) {
      errors {
        message
      }
      posts {
        id
        title
        image
        content
        author
        tags
        slug
        anchor_title
        category
        created_at
      }
      pageInfo{
        page
        pageSize
        total
        totalPages
      }
    }
  }
`;

export const GET_BLOG = gql`
  query getPostBySlug($slug: String!){
    getPostBySlug(slug: $slug) {
      errors {
        message
      }
      post {
        id
        title
        image
        content
        author
        tags
        slug
        anchor_title
        category
        created_at
      }
    }
  }
`;
