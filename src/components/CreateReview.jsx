import React from 'react';
import { Formik } from 'formik';
import CreateReviewForm from './CreateReviewForm';
import * as yup from 'yup';
import { View, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';
import useCreateReview from '../hooks/useCreateReview';

const styles = StyleSheet.create({
  formArea: {
    backgroundColor: "white",
    paddingBottom: 20
  }
});

export const CreateReviewFormikForm = ({ onSubmit }) => {
  const initialValues = {
    repoName: '',
    repoOwner: '',
    rating: 0,
    text: ''
  };

  const validationSchema = yup.object().shape({
    repoName: yup
      .string()
      .required("Repository name is required"),
    repoOwner: yup
      .string()
      .required("Repository owner name is required"),
    rating: yup
      .number()
      .min(0, "Rating must be a positiva number")
      .max(100, `Rating cannot be more than 100`)
      .required("Rating is required"),
    text: yup
      .string()
  });

  return (
    <View style={ styles.formArea }>
      <Formik initialValues={ initialValues } onSubmit={ onSubmit } validationSchema={ validationSchema }>
        { ({ handleSubmit }) => <CreateReviewForm onSubmit={ handleSubmit } />}
      </Formik>
    </View>
  );
};

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();
  
  const onSubmit = async values => {
    const { repoName, repoOwner, rating, text } = values;
    try {
      const { data } = await createReview({ repositoryName: repoName, ownerName: repoOwner, rating: Number(rating), text });
      history.push(`/repository/${data.createReview.repository.id}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CreateReviewFormikForm onSubmit={ onSubmit } />
  );
};

export default CreateReview;