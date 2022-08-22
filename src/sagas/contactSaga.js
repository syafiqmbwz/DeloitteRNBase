//Async Storage Library
import {call, fork, put, select, takeLatest} from 'redux-saga/effects';
import api from '../services/api';
import {ADD_CONTACT, DEL_CONTACT, UP_CONTACT} from '../actions/types';
import {
  addContactSuccess,
  addContactFailed,
  updateContactSuccess,
  updateContactFailed,
  delContactSuccess,
  delContactFailed,
} from '../actions/contact';

function* workerGetContactSaga(params) {
  try {
    const response = yield call(api.getContacts);
    console.log('response',response)
    if (response.status === 200) {
      yield put(addContactSuccess(response.data));
    } else {
      if (response) {
        yield put(addContactFailed(response));
      } else {
        if (response.status) {
        }
        yield put(addContactFailed(response.data));
      }
    }
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

function* workerUpdateContactSaga(params) {
  try {
    const state = yield select();
    const newContact = yield state.contacts.contact.filter(data => {
      return data.email !== params.payload.lastData.email;
    });
    yield put(updateContactSuccess([...newContact, params.payload.newData]));
  } catch (error) {
    yield put(updateContactFailed(error));
    console.log(error);
  }
}

function* workerDeleteContactSaga(params) {
  try {
    const state = yield select();
    const newContact = yield state.contacts.contact.filter(data => {
      return data.email !== params.payload.email;
    });
    yield put(delContactSuccess([...newContact]));
  } catch (error) {
    yield put(delContactFailed(error));
    console.log(error);
  }
}

function* getContactSaga() {
  yield takeLatest(ADD_CONTACT, workerGetContactSaga);
}
function* updateContactSaga() {
  yield takeLatest(UP_CONTACT, workerUpdateContactSaga);
}
function* deleteContactSaga() {
  yield takeLatest(DEL_CONTACT, workerDeleteContactSaga);
}
export const watcherContact = [
  fork(getContactSaga),
  fork(updateContactSaga),
  fork(deleteContactSaga),
];
