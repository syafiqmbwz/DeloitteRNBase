//Async Storage Library
import {call, fork, put , takeLatest} from 'redux-saga/effects';
import api from '../services/api';
import {SEARCH_MAP } from '../actions/types';
import {
  searchMapSuccess,
  searchMapFailed,
} from '../actions/maps';

function* workerGetSearch(params) {
  try {
    const response = yield call(api.getMaps);//mockapi
    console.log('workerGetSearch',response.data)
    if (response.status === 200) {
      yield put(searchMapSuccess(response.data));
    } else {
      if (response) {
        yield put(searchMapFailed(response));
      } else {
        if (response.status) {
        }
        yield put(searchMapFailed(response.data));
      }
    }
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

function* searchMap() {
  yield takeLatest(SEARCH_MAP, workerGetSearch);
}
export const watcherMaps = [
  fork(searchMap),
];
