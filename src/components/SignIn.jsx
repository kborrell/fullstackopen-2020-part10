import React from 'react';
import { Formik, FormikProvider } from 'formik';
import SignInForm from './SignInForm';
import * as yup from 'yup';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formArea: {
    backgroundColor: "white",
    paddingBottom: 20
  }
});

const SignIn = () => {
  const initialValues = {
    username: '',
    password: ''
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required"),
    password: yup
      .string()
      .required("Password is required")
  });

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <View style={ styles.formArea }>
      <Formik initialValues={ initialValues } onSubmit={ onSubmit } validationSchema={ validationSchema }>
        { ({ handleSubmit }) => <SignInForm onSubmit={ handleSubmit } />}
      </Formik>
    </View>
  );
};

export default SignIn;