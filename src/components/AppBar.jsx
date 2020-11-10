import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

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
  return <View style={styles.container}>
    <ScrollView horizontal alwaysBounceHorizontal="false" showsHorizontalScrollIndicator="false">
      <AppBarTab path="/">Repositories</AppBarTab>
      <AppBarTab path="/signin">Sign In</AppBarTab>
    </ScrollView>
  </View>;
};

export default AppBar;