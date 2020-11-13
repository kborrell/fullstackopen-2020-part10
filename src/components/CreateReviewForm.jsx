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

const CreateReviewForm = ({ onSubmit }) => {
  
  return (
    <View>
      <FormikTextInput name="repoName" placeholder="Repository name" autoCapitalize="none" autoCorrect={ false } />
      <FormikTextInput name="repoOwner" placeholder="Repository owner name" autoCapitalize="none" autoCorrect={ false } />
      <FormikTextInput name="rating" keyboardType="numeric" placeholder="Rating (0-100)" autoCapitalize="none" autoCorrect={ false } />
      <FormikTextInput name="text" placeholder="Your review..." autoCapitalize="true" autoCompleteType="username" autoCorrect={ false } />
      <TouchableWithoutFeedback testID="confirmButton" onPress={onSubmit}>
        <View style={ styles.confirmButton }>
          <Text fontWeight="bold" fontSize="subheading" style={ styles.confirmText }>Create review</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CreateReviewForm;