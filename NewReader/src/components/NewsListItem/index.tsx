import React from 'react';
import {ListItem} from 'react-native-elements';
import {styles} from './styles';
type PropsType = {
  id: number;
  onPressItem: (item: any) => void;
  title: string;
};
export const NewsListItem = (props: PropsType) => {
  return (
    <ListItem
      onPress={() => props.onPressItem(props)}
      key={props.id}
      bottomDivider>
      <ListItem.Content>
        <ListItem.Title style={styles.titleText}>{props.title}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};
