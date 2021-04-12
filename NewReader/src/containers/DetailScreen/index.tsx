import React from 'react';
import {Linking, Text, View} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {styles} from './styles';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NewsListItem} from '../../components';

type RootStackParamList = {
  Home: undefined;
  Details: {selectedNewsFeed: any};
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const DetailScreen = ({route, navigation}: Props) => {
  const {selectedNewsFeed} = route.params;
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerTitle}>
          <Card.Title>{selectedNewsFeed.title}</Card.Title>
        </View>
        <Icon onPress={navigation.goBack} name="close" color="black" />
      </View>
    );
  };
  const onPressReadMore = (url: string) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };
  return (
    <Card containerStyle={styles.container}>
      {renderHeader()}
      {selectedNewsFeed.description && (
        <Text style={styles.overviewText}>{selectedNewsFeed.description}</Text>
      )}
      {selectedNewsFeed && selectedNewsFeed?.id && (
        <NewsListItem
          id={selectedNewsFeed.id}
          title={'Read More ...'}
          onPressItem={() => onPressReadMore(selectedNewsFeed.id)}
        />
      )}
    </Card>
  );
};

export default DetailScreen;
