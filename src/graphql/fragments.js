import { gql } from 'apollo-boost';

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    fullName,
    ownerAvatarUrl,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage
  }
`;