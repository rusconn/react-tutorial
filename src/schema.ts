import { gql } from "@apollo/client";

export const schema = gql`
  enum Player {
    Cross
    Circle
  }
`;
