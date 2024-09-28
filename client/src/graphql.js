import { gql } from "@apollo/client";

export const GET_ALL_FILES = gql`
  query GetAllFiles {
    files {
      name
      size
      type
    }
  }
`;
