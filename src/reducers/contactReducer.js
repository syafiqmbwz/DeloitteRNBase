import {
  ADD_CONTACT,
  ADD_CONTACT_FAILED,
  ADD_CONTACT_SUCCESS,
  DEL_CONTACT,
  DEL_CONTACT_FAILED,
  DEL_CONTACT_SUCCESS,
  UP_CONTACT,
  UP_CONTACT_FAILED,
  UP_CONTACT_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  contact: [],
  loading: false,
  loadingUpdate: false,
  message: '',
};

export default (state, action) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }
  switch (action.type) {
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        contact: [...action.payload],
        loading: false,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contact: [],
        loading: true,
      };
    case ADD_CONTACT_FAILED:
      return {
        ...state,
        contact: [],
        loading: false,
        message: action.payload,
      };
    case UP_CONTACT_SUCCESS:
      return {
        ...state,
        contact: [...action.payload],
        loadingUpdate: false,
      };
    case UP_CONTACT_FAILED:
      return {
        ...state,
        contact: [],
        loadingUpdate: false,
      };
    case UP_CONTACT:
      return {
        ...state,
        loadingUpdate: false,
      };
    case DEL_CONTACT_SUCCESS:
      return {
        ...state,
        contact: [...action.payload],
        loadingUpdate: false,
      };
    case DEL_CONTACT_FAILED:
      return {
        ...state,
        loadingUpdate: false,
      };
    case DEL_CONTACT:
      return {
        ...state,
        loadingUpdate: false,
      };
    default:
      return state;
  }
};
