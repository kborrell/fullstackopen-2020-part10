import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import useMyUser from '../hooks/useMyUser';

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
  const { user } = useMyUser();

  return <View style={styles.container}>
    <ScrollView horizontal alwaysBounceHorizontal={ false } showsHorizontalScrollIndicator={ false }>
      <AppBarTab path="/">Repositories</AppBarTab>
      { user && <AppBarTab path="/createReview">Add review</AppBarTab> }
      { user && <AppBarTab path="/myReviews">My Reviews</AppBarTab> }
      { user && <AppBarTab path="/signout">Sign Out</AppBarTab> }
      { !user && <AppBarTab path="/signin">Sign In</AppBarTab> }
      { !user && <AppBarTab path="/signup">Sign Up</AppBarTab> }
    </ScrollView>
  </View>;
};

export default AppBar;