import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
  confirmButton: {
    height: 60,
    marginHorizontal: 15,
    marginTop: 20,
    borderRadius: 7,
    backgroundColor: "#1E88E5",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center"
  },
  confirmText: {
    color: "white"
  }
});

const SignInForm = ({ onSubmit }) => {
  
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" autoCapitalize="none" autoCompleteType="username" autoCorrect={ false } />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={ true } autoCompleteType="password" />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <View style={ styles.confirmButton }>
          <Text fontWeight="bold" fontSize="subheading" style={ styles.confirmText }>Sign In</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignInForm;