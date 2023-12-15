import { gql } from '@apollo/client';

export const NEWSLETTER = gql`
  mutation createNewsletter(
    $email: String!
    $topics: String!
  ) {
    createNewsletter ( 
      options: {
        email: $email,
        topics: $topics,
      }
    )
  }
`;
