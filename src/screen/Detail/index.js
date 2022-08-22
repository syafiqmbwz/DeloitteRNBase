  import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import {Avatar, Input} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {updateContact} from '../../actions/contact';
import AutoCompleteBox from '../../components/AutoCompleteBox';
import AutoCompleteResultList from '../../components/AutoCompleteResultList';
import {searchMap} from '../../actions/maps';

const DetailScreen = ({route, navigation}) => {
  const {id} = route.params;
  const {contact, loadingUpdate} = useSelector(({contacts}) => contacts);
  const {recommended} = useSelector(({maps}) => maps);

  const dispatch = useDispatch();
  const [dataProfile, setDataProfile] = useState({
    name: '',
    email: '',
    photo: null,
  });
  const [editBool, setEditBool] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchTextData, setSearchTextData] = useState([]);

  const editableInput = () => {
    setEditBool(!editBool);
    setDataProfileEdit(dataProfile);
  };
  const [dataProfileEdit, setDataProfileEdit] = useState({
    name: '',
    email: '',
    photo: null,
  });
  const cancelEdit = () => {
    setEditBool(!editBool);
  };
  const saveEdit = () => {
    dispatch(
      updateContact({lastData: dataProfile[0], newData: dataProfileEdit[0]}),
    );
    setEditBool(!editBool);
  };
  useEffect(() => {
    const valueData = contact.filter(function (data) {
      return data.email === id;
    });
    setDataProfile(valueData);
  }, [contact, id]);

  const searchMapByApi = (params)=>{
    dispatch(searchMap(params));
  }

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar rounded size="xlarge" source={{uri: dataProfile[0]?.photo}} />
      </View>
      {/* <ScrollView style={styles.formContainer}>
        <Input
          autoFocus
          enablesReturnKeyAutomatically
          returnKeyType="next"
          autoCapitalize="words"
          value={!editBool ? dataProfile[0]?.name : dataProfileEdit[0]?.name}
          placeholder="First name"
          blurOnSubmit={false}
          editable={editBool}
          onChangeText={data => {
            let newData = dataProfile[0];
            newData.name = data;
            setDataProfileEdit([newData]);
          }}
        />
        <Input
          enablesReturnKeyAutomatically
          autoCapitalize="words"
          returnKeyType="done"
          value={!editBool ? dataProfile[0]?.email : dataProfileEdit[0]?.email}
          placeholder="Last name"
          editable={editBool}
          onChangeText={data => {
            console.log('onChange', data);
            let newData = dataProfile[0];
            newData.email = data;
            setDataProfileEdit([newData]);
          }}
        />
        <TextInput
          autoCapitalize="words"
          returnKeyType="done"
          value={!editBool ? dataProfile[0]?.bio : dataProfileEdit[0]?.bio}
          placeholder="Bio"
          multiline={true}
          editable={editBool}
          onChangeText={data => {
            let newData = dataProfile[0];
            newData.bio = data;
            setDataProfileEdit([newData]);
          }}
        />
        {!editBool ? (
          <TouchableOpacity
            style={styles.buttonEdit}
            onPress={() => {
              editableInput();
            }}>
            <Icon name="edit" size={16} />
            <Text style={styles.textEditStyle}>Edit</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.flexRow}>
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={() => {
                cancelEdit();
              }}>
              <Text style={styles.textEditStyle}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonSave}
              onPress={() => {
                saveEdit();
              }}>
              <Icon name="save" size={16} />
              <Text style={styles.textEditStyle}>Save</Text>
            </TouchableOpacity>
          </View>
        )} */}
        <AutoCompleteBox
          placeholder="Masukan Nama Tempat"
          value={searchText}
          onChangeText={query => {
            searchMapByApi(query)
            setSearchText(query)
          }}
        />
        <AutoCompleteResultList data={recommended} />
      {/* </ScrollView> */}
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 3,
    backgroundColor: 'white',
    paddingTop: 32,
    paddingLeft: 32,
    paddingRight: 32,
  },
  avatarProfile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEditStyle: {
    fontSize: 18,
    margin: 4,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 32,
    paddingBottom: 32,
    width: '100%',
    justifyContent: 'space-between',
  },
  buttonEdit: {
    width: '100%',
    display: 'flex',
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.5,
    marginTop: 24,
  },
  buttonCancel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.5,
    marginTop: 24,
    width: 150,
  },
  buttonSave: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.5,
    marginTop: 24,
    width: 150,
  },
});
