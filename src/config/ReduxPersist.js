// Async Storage Library
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReduxPersist = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'root',
    timeout: 0,
    storage: AsyncStorage,
    whitelist: ['contacts'],
  },
};

export default ReduxPersist;
