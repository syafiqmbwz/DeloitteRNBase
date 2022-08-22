import {
  ADD_CONTACT,
  ADD_CONTACT_SUCCESS,
  DEL_CONTACT,
  DEL_CONTACT_SUCCESS,
  UP_CONTACT,
  UP_CONTACT_SUCCESS,
} from './types';

export const addContact = (payload) => ({
  type: ADD_CONTACT,
  payload,
});

export const delContact = (payload) => ({
  type: DEL_CONTACT,
  payload,
});

export const updateContact = (payload) => ({
  type: UP_CONTACT,
  payload,
});

export const addContactSuccess = (payload) => ({
  type: ADD_CONTACT_SUCCESS,
  payload,
});

export const delContactSuccess = (payload) => ({
  type: DEL_CONTACT_SUCCESS,
  payload,
});

export const updateContactSuccess = (payload) => ({
  type: UP_CONTACT_SUCCESS,
  payload,
});

export const addContactFailed = (payload) => ({
  type: ADD_CONTACT_SUCCESS,
  payload,
});

export const delContactFailed = (payload) => ({
  type: DEL_CONTACT_SUCCESS,
  payload,
});

export const updateContactFailed = (payload) => ({
  type: UP_CONTACT_SUCCESS,
  payload,
});
