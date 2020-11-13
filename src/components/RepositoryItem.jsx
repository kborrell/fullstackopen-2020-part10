import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import theme from '../theme';
import Text from './Text';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  card : {
    backgroundColor: "white",
    padding: 10,
    flexDirection: "column"
  },
  repoInfo: {
    flexDirection: "row",
    alignItems: "flex-start"
  },
  repoStats: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  profileImage: {
    width: 55,
    height: 55,
    resizeMode: "contain",
    margin: 8,
    borderRadius: 8
  },
  repoHeadline: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 10,
    flex: 1
  },
  repoDescription: {
    paddingTop: 6
  },
  languageTag: {
    marginTop: 10,
    backgroundColor: theme.colors.primary,
    padding: 8,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  languageTagText: {
    color: "white"
  },
  stat: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  statName: {
    marginTop: 5
  },
  statCount: {
    marginBottom: 5
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
  }
});

const shortNumber = (number) => {
  return number < 1000 ? number.toString() : `${(number/1000).toFixed(1)}k`;
};

const RepositoryItem = ({ repository, showOpenButton }) => {
  return (
    <View style={ styles.card }>
      <View style={ styles.repoInfo }>
        <Image style={ styles.profileImage } source={ {uri: `${ repository.ownerAvatarUrl }` } } />
        <View style={ styles.repoHeadline }>
          <Text testID="repoFullName" fontSize="heading" fontWeight='bold' style={ styles.repoName } >{ repository.fullName }</Text>
          <Text testID="repoDescription" color="textSecondary" fontSize="subheading" style={ styles.repoDescription }>{ repository.description }</Text>
          <View style={ styles.languageTag }>
            <Text testID="repoLanguage" fontSize="subheading" style={ styles.languageTagText }>{ repository.language }</Text>
          </View>
        </View>
      </View>
      <View style={ styles.repoStats }>
        <View style={ styles.stat }>
          <Text testID="repoStargazersCount" fontWeight="bold" fontSize="heading" style={ styles.statCount }>{ shortNumber(repository.stargazersCount) }</Text>
          <Text fontSize="subheading" color="textSecondary" style={ styles.statName }>Stars</Text>
        </View>
        <View style={ styles.stat }>
          <Text testID="repoForksCount" fontWeight="bold" fontSize="heading" style={ styles.statCount }>{ shortNumber(repository.forksCount) }</Text>
          <Text fontSize="subheading" color="textSecondary" style={ styles.statName }>Forks</Text>
        </View>
        <View style={ styles.stat }>
          <Text testID="repoReviewsCount" fontWeight="bold" fontSize="heading" style={ styles.statCount }>{ shortNumber(repository.reviewCount) }</Text>
          <Text fontSize="subheading" color="textSecondary" style={ styles.statName }>Reviews</Text>
        </View>
        <View style={ styles.stat }>
          <Text testID="repoRatingAvg" fontWeight="bold" fontSize="heading" style={ styles.statCount }>{ shortNumber(repository.ratingAverage) }</Text>
          <Text fontSize="subheading" color="textSecondary" style={ styles.statName }>Rating</Text>
        </View>
      </View>
      {
        showOpenButton &&
        (<View>
          <TouchableWithoutFeedback onPress={() => Linking.openURL(repository.url)}>
            <View style={ styles.confirmButton }>
              <Text fontWeight="bold" fontSize="subheading" style={ styles.confirmText }>Open in GitHub</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>)
      }
    </View>
  );
};

export default RepositoryItem;