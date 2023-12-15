import { gql } from '@apollo/client';

export const TAGS = gql`
  query getTags {
    getTags {
      errors {
        message
      }
      tags {
        id
        title
        slug
      }
    }
  }
`;
