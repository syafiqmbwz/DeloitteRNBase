import {all} from 'redux-saga/effects';
import {watcherContact} from '../sagas/contactSaga';
export default function* reduxSaga() {
  yield all([...watcherContact]);
}
