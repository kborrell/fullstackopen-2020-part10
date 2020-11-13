import React, { useState } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useHistory } from 'react-router-native';
import RNPickerSelect from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    flexDirection: "column"
  },
  sortingSelector: {
    height: 60,
    margin: 0,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#546E7A",
    padding: 10,
    paddingLeft: 30
  }
});

const ItemSeparator = () => <View style={ styles.separator } />;

const SelectSortingHeader = (selectedOption, setSelectedOption) => {
  return (
    <RNPickerSelect
      style={ { 
        inputIOS: styles.sortingSelector, 
        inputAndroid: styles.sortingSelector,
        iconContainer: {
          top: 25,
          right: 35,
        } 
      } }
      onValueChange={(value) => setSelectedOption(value)}
      value={ selectedOption }
      items={[
        { label: "Latest repositories", value: { orderBy: "CREATED_AT", orderDirection: "DESC" } },
        { label: "Highest rated repositories", value: { orderBy: "RATING_AVERAGE", orderDirection: "DESC" } },
        { label: "Lowest rated repositories", value: { orderBy: "RATING_AVERAGE", orderDirection: "ASC" } }
      ]}
      Icon={() => {
        return <Chevron size={1.5} color="gray" />;
      }}
    />
  );
};

export const RepositoryListContainer = ({ repositories, selectedSorting, setSortingHandler, onEndReach }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  const history = useHistory();

  const goToDetails = (repository) => {
    history.push(`/repository/${repository.id}`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={ () => goToDetails(item) }>
      <RepositoryItem repository={ item } />
    </TouchableOpacity>
  );

  const setSelectedOption = (value) => {
    if (value) {
      setSortingHandler(value);
    }
  };

  return (
    <View>
      <FlatList
        data={ repositoryNodes }
        ItemSeparatorComponent={ ItemSeparator }
        renderItem={ renderItem }
        contentContainerStyle={ styles.container }
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={ () => SelectSortingHeader(selectedSorting, setSelectedOption) }
        onEndReached={ onEndReach }
        onEndReachedThreshold={ 0.5 }
      />
    </View>
  );
};

const RepositoryList = () => {
  const [ sortingCriteria, setSortingCriteria ] = useState({ orderBy: "CREATED_AT", orderDirection: "DESC"});
  
  let variables = { first: 4, ...sortingCriteria };

  const { repositories, fetchMore } = useRepositories(variables);

  const onEndReach = () => {
    fetchMore();
  };

  if (!repositories) {
    return null;
  }

  return (
    <RepositoryListContainer repositories={ repositories } setSortingHandler={ setSortingCriteria } selectedSorting={ sortingCriteria } onEndReach={ onEndReach } />
  );
};

export default RepositoryList;