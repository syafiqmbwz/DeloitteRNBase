import React, { useEffect } from 'react';
import {
  FlatList, Text, StyleSheet, View, ActivityIndicator,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ContactItem from './contactItem';
import { addContact } from '../../actions/contact';

const List = () => {
  const { contacts } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log('contact', contacts.loading);

  useEffect(() => {
    // if (contacts.contact.length > 0) {
    dispatch(addContact());
    // }
  }, [dispatch]);
  return (
    <View>
      {contacts.loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={contacts.contact}
          ListEmptyComponent={() => (
            <View style={[styles.container, styles.flexRow]}>
              <Text style={styles.textEditStyle}>List Empty</Text>
            </View>
          )}
          renderItem={({ item }) => <ContactItem item={item} />}
          keyExtractor={(item) => item.email}
        />
      )}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarProfile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEditStyle: {
    fontSize: 20,
    margin: 4,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 32,
    paddingBottom: 32,
    width: '100%',
    height: '100%',
  },
});
