import {combineReducers} from 'redux';
import ContactReducer from './contactReducer';

const appReducer = combineReducers({
  contacts: ContactReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
