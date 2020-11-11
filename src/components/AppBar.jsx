import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { AUTHORIZED_USER } from '../graphql/queries';
import { useQuery } from '@apollo/react-hooks';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: 20,
    paddingLeft: 18,
    backgroundColor: theme.colors.headerBg,
    flexDirection: "row"
  }
});

const AppBar = () => {
  const { data } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network'
  });

  return <View style={styles.container}>
    <ScrollView horizontal alwaysBounceHorizontal={ false } showsHorizontalScrollIndicator={ false }>
      <AppBarTab path="/">Repositories</AppBarTab>
      { data && !data.authorizedUser && <AppBarTab path="/signin">Sign In</AppBarTab> }
      { data && data.authorizedUser && <AppBarTab path="/signout">Sign Out</AppBarTab> }
    </ScrollView>
  </View>;
};

export default AppBar;