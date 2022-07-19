import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {ListItem, Avatar, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {delContact} from '../../actions/contact';

const ContactItem = ({item}) => {
  const navigation = useNavigation();
  const [loadingImg, setLoadingImg] = useState(false);
  const {contacts} = useSelector(state => state);
  const dispatch = useDispatch();
  const deleteContat = email => {
    dispatch(delContact({email: email}));
  };
  return (
    <ListItem.Swipeable
      onPress={() => navigation.navigate('Detail', {id: item.email})}
      rightContent={
        <Button
          title="Delete"
          icon={{color: 'white'}}
          // eslint-disable-next-line react-native/no-inline-styles
          buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
          onPress={() => {
            deleteContat(item.email);
          }}
        />
      }
      bottomDivider>
      {loadingImg ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <Avatar source={{uri: item.photo}} />
      )}

      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem.Swipeable>
  );
};

export default ContactItem;

const styles = StyleSheet.create({});
