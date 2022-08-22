import {
  SEARCH_MAP, SEARCH_MAP_FAILED, SEARCH_MAP_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  recommended: [],
  searchText: '',
  loading: false,
  loadingUpdate: false,
  message: '',
};

export default (state, action) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }
  switch (action.type) {
    case SEARCH_MAP:
      return {
        ...state,
        searchText: [...action.payload],
        loading: false,
      };
    case SEARCH_MAP_SUCCESS:
      return {
        ...state,
        recommended: [...action.payload],
        loading: true,
      };
    case SEARCH_MAP_FAILED:
      return {
        ...state,
        recommended: [],
        loading: false,
        message: action.payload,
      };
    default:
      return state;
  }
};
