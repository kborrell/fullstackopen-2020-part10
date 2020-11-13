import React from 'react';
import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import { FlatList } from 'react-native';
import ReviewItem from './ReviewItem';

const RepositoryDetails = () => {
  var { id } = useParams();
  const variables = { first: 4, id };
  const { repository, fetchMore } = useRepository(variables);

  const onEndReach = () => {
    fetchMore();
  };

  if (!repository) {
    return null;
  }

  const reviewsNodes = repository.reviews.edges.map(edge => edge.node);

  return (
    <FlatList 
      data={ reviewsNodes }
      renderItem={ ({ item }) => <ReviewItem review={ item } /> }
      keyExtractor={ ({ id }) => id }
      ListHeaderComponent={ () => <RepositoryItem repository={ repository } showOpenButton={ true } />}
      onEndReached={ onEndReach }
      onEndReachedThreshold={ 0.5 }
    />
  );
};

export default RepositoryDetails;