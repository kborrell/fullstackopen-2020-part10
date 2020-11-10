import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  field: {
    height: 60,
    borderWidth: 1,
    borderColor: "#adadad",
    marginHorizontal: 15,
    marginTop: 20,
    borderRadius: 7,
    padding: 10,
    fontSize: 18
  },
  error: {
    borderColor: "#d73a4a"
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.field, 
    error && styles.error,
    style
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;