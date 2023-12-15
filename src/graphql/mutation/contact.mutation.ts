import { gql } from '@apollo/client';

export const CONTACT = gql`
  mutation contact(
    $name: String!,
    $email: String!,
    $subject: String!,
    $message: String!
  ) {
    contact ( 
      options: {
        name: $name,
        email: $email,
        subject: $subject,
        message: $message
      }
    ) {
      errors {
        message
      }
      send
    }
  }
`;
