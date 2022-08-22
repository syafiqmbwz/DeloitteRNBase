import { combineReducers } from 'redux';
import ContactReducer from './contactReducer';
import mapsReducer from './mapsReducer';

const appReducer = combineReducers({
  contacts: ContactReducer,
  maps: mapsReducer,

});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
