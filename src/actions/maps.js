import {
  SEARCH_MAP,
  SEARCH_MAP_FAILED,
  SEARCH_MAP_SUCCESS
} from './types';

export const searchMap = payload => ({
  type: SEARCH_MAP,
  payload,
});

export const searchMapSuccess= payload => ({
  type: SEARCH_MAP_SUCCESS,
  payload,
});

export const searchMapFailed = payload => ({
  type: SEARCH_MAP_FAILED,
  payload,
});
