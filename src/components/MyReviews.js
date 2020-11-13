import React from 'react';
import { FlatList } from 'react-native';
import ReviewItem from './ReviewItem';
import useMyUser from '../hooks/useMyUser';

const MyReviews = () => {
  const variables = { includeReviews: true };
  const { user } = useMyUser(variables);

  if (!user) {
    return null;
  }

  const reviewsNodes = user.reviews.edges.map(edge => edge.node);

  return (
    <FlatList 
      data={ reviewsNodes }
      renderItem={ ({ item }) => <ReviewItem review={ item } showButtons={ true } /> }
      keyExtractor={ ({ id }) => id }
    />
  );
};

export default MyReviews;