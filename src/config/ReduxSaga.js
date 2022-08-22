import { all } from 'redux-saga/effects';
import { watcherContact } from '../sagas/contactSaga';
import { watcherMaps } from '../sagas/mapsSaga';

export default function* reduxSaga() {
  yield all([...watcherContact]);
  yield all([...watcherMaps]);
}
