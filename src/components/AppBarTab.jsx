import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  tab: {
    color: "white",
    fontSize: 22,
    marginHorizontal: 10
  }
});

const AppBarTab = ({ path, children }) => {
  return (
    <Link to={ path } component={TouchableWithoutFeedback}>
      <Text fontWeight="bold" style={styles.tab}>{ children }</Text>
    </Link>
  );
};

export default AppBarTab;