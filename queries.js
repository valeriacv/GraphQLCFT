import { gql } from '@apollo/client';

const getBooks = gql`
  query getBooks {
    books {
      title
      author
    }
  }
`;

export {
  getBooks,
}