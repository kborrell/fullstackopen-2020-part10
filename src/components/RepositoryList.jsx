import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    flexDirection: "column"
  }
});

const ItemSeparator = () => <View style={ styles.separator } />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const renderItem = ({ item }) => <RepositoryItem repository={ item } />;

  return (
    <View>
      <FlatList
        data={ repositoryNodes }
        ItemSeparatorComponent={ ItemSeparator }
        renderItem={ renderItem }
        contentContainerStyle={ styles.container }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default RepositoryList;