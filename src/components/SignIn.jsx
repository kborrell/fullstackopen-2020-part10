import React from 'react';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import * as yup from 'yup';
import { View, StyleSheet } from 'react-native';
import useSignIn from '../hooks/useSignIn';
import AuthStorage from '../utils/authStorage';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  formArea: {
    backgroundColor: "white",
    paddingBottom: 20
  }
});

const SignIn = () => {
  const [sigIn] = useSignIn();
  const history = useHistory();
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

  const onSubmit = async values => {
    const { username, password } = values;
    try {
      const { data } = await sigIn({ username, password });
      console.log(data.authorize.accessToken);
      history.push("/");
    } catch (e) {
      console.log(e);
    }
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