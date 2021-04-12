import {get} from 'lodash';
import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {
  getRssNewsRequest,
  getRssNewsSelector,
} from '../../adapters/redux/rssReader';
import {NewsListItem} from '../../components';
import {styles} from './styles';

const StartScreen = (props: any) => {
  const dispatch = useDispatch();
  const newsSelector = useSelector(getRssNewsSelector);

  useEffect(() => {
    dispatch(getRssNewsRequest());
  }, []);

  const onPressItem = (item: any) => {
    props.navigation.navigate('Details', {selectedNewsFeed: item});
  };

  const renderItem = ({item}: any) => {
    if (item && item.id && item.title) {
      return (
        <NewsListItem
          id={item?.id}
          title={item?.title}
          onPressItem={() => onPressItem(item)}
        />
      );
    }
    return <></>;
  };
  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyList}>
        <Text>No feed available</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={newsSelector}
        renderItem={renderItem}
        keyExtractor={(item: any) => get(item, 'id', 0)}
        ListEmptyComponent={renderEmptyComponent()}
      />
    </View>
  );
};

export default StartScreen;
