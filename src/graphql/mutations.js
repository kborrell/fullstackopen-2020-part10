import { gql } from 'apollo-boost';

export const AUTHORIZE = gql`
  mutation authorize($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      repository {
        id
      }
    }
  }
`;

export const SIGN_UP = gql`
  mutation signUp($user: CreateUserInput) {
    createUser(user: $user) {
      username
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview($id: ID!) {
    deleteReview(id: $id)
  }
`;