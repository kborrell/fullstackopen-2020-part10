import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import Text from './Text';
import { format } from 'date-fns';
import { useHistory } from 'react-router-native';
import { DELETE_REVIEW } from '../graphql/mutations';
import { AUTHORIZED_USER } from '../graphql/queries';
import { useMutation } from '@apollo/react-hooks';

const styles = StyleSheet.create({
  card : {
    backgroundColor: "white",
    padding: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 10
  },
  cardSection: {
    flexDirection: "row"
  },
  reviewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 10,
    marginTop: 8,
    flex: 1
  },
  reviewDate: {
    paddingTop: 6
  },
  ratingFrame: {
    marginTop: 15,
    marginHorizontal: 10,
    borderColor: "#0165D4",
    borderWidth: 3,
    padding: 10,
    width: 60,
    height: 60,
    borderRadius: 70,
    overflow: "visible",
    justifyContent: "center",
    alignItems: "center"
  },
  ratingText: {
    color: "#0165D4",
    fontSize: 23,
  },
  reviewDescription: {
    marginTop: 12,
    color: "#263238"
  },
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
  },
  deleteButton: {
    backgroundColor: "#D32F2F"
  },
  buttonsFrame: {
    justifyContent: "space-evenly"
  },
  buttonFrame: {
    flex: 1
  }
});

const formatDate = (dateString) => {
  return format(new Date(dateString), "dd.MM.yy");
};

const ReviewItem = ({ review, showButtons }) => {
  const history = useHistory();
  const [ deleteReview, result ] = useMutation(DELETE_REVIEW, {
    refetchQueries: [ { query: AUTHORIZED_USER } ]
  });

  const doDeleteReview = () => {
    deleteReview({ variables: { id: review.id } });
  };

  const requestDeleteReview = () => {
    Alert.alert('Delete review', "Are yo usure you want to delete this review?",
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      { 
        text: "Delete",
        onPress: () => doDeleteReview()
      }
    ],
    { cancelable: true });
  };

  const openRepository = () => {
    history.push(`/repository/${review.repository.id}`);
  };

  return (
    <View style={ styles.card }>
      <View style={ styles.cardSection }>
        <View style={ styles.ratingFrame }>
          <Text fontWeight="bold" style={ styles.ratingText }>{ review.rating }</Text>
        </View>
        <View style={ styles.reviewContent }>
          <Text fontSize="heading" fontWeight='bold'>{ review.user.username }</Text>
          <Text color="textSecondary" fontSize="subheading" style={ styles.reviewDate }>{ formatDate(review.createdAt) }</Text>
          <Text fontSize="subheading" style={ styles.reviewDescription }>{ review.text }</Text>
        </View>
      </View>
      { showButtons && 
        <View style={ [ styles.cardSection, styles.buttonsFrame] }>
          <TouchableWithoutFeedback onPress={ openRepository } style={ styles.buttonFrame }>
            <View style={ styles.confirmButton }>
              <Text fontWeight="bold" fontSize="subheading" style={ styles.confirmText }>View Repository</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={ requestDeleteReview } style={ styles.buttonFrame }>
            <View style={ [styles.confirmButton, styles.deleteButton] }>
              <Text fontWeight="bold" fontSize="subheading" style={ styles.confirmText }>Delete Review</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      }
    </View>
  );
};

export default ReviewItem;