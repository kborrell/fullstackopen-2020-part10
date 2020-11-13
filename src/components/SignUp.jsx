import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { View, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';
import useSignUp from '../hooks/useSignUp';
import SignUpForm from './SignUpForm';

const styles = StyleSheet.create({
  formArea: {
    backgroundColor: "white",
    paddingBottom: 20
  }
});

export const SignUpFormikForm = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
    passwordConfirm: ''
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(1, "Minimum length is 1 character")
      .max(30, "Maximum length is 30 characters")
      .required("Username is required"),
    password: yup
      .string()
      .min(5, "Minimum length is 5 characters")
      .max(50, "Maximum length is 50 characters")
      .required("Password is required"),
    passwordConfirm: yup
      .string()
      .required("Password confirmation is required")
      .oneOf([yup.ref('password'), null], "Password do not match")
  });

  return (
    <View style={ styles.formArea }>
      <Formik initialValues={ initialValues } onSubmit={ onSubmit } validationSchema={ validationSchema }>
        { ({ handleSubmit }) => <SignUpForm onSubmit={ handleSubmit } />}
      </Formik>
    </View>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const history = useHistory();
  
  const onSubmit = async values => {
    const { username, password } = values;
    try {
      const { data } = await signUp({ username, password });
      console.log(data);
      history.push(`/`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignUpFormikForm onSubmit={ onSubmit } />
  );
};

export default SignUp;