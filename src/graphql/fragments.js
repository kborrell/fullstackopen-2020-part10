import { gql } from 'apollo-boost';

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id,
    fullName,
    ownerAvatarUrl,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    url
  }
`;

export const REVIEW_DETAILS = gql`
  fragment ReviewDetails on Review {
    id
    text
    rating
    createdAt
    repositoryId
    repository {
      id
    }
    user {
      id
      username
    }
  }
`;