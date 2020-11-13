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

const SignUpForm = ({ onSubmit }) => {
  
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" autoCapitalize="none" autoCompleteType="username" autoCorrect={ false } />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={ true } autoCompleteType="password" />
      <FormikTextInput name="passwordConfirm" placeholder="Password confirmation" secureTextEntry={ true } autoCompleteType="password" />
      <TouchableWithoutFeedback testID="confirmButton" onPress={onSubmit}>
        <View style={ styles.confirmButton }>
          <Text fontWeight="bold" fontSize="subheading" style={ styles.confirmText }>Sign Up</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignUpForm;