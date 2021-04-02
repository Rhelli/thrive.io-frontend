import {
  CREATE_SHORTLIST_ITEM_REQUEST, CREATE_SHORTLIST_ITEM_SUCCESS,
  CREATE_SHORTLIST_ITEM_ERROR, DELETE_SHORTLIST_ITEM_REQUEST,
  DELETE_SHORTLIST_ITEM_SUCCESS, DELETE_SHORTLIST_ITEM_ERROR,
} from './shortlistTypes';

export const createShortlistItemRequest = () => ({
  type: CREATE_SHORTLIST_ITEM_REQUEST,
});

export const createShortlistItemSuccess = () => ({
  type: CREATE_SHORTLIST_ITEM_SUCCESS,
});

export const createShortlistItemError = error => ({
  type: CREATE_SHORTLIST_ITEM_ERROR,
  payload: error,
});

export const deleteShortlistItemRequest = () => ({
  type: DELETE_SHORTLIST_ITEM_REQUEST,
});

export const deleteShortlistItemSuccess = message => ({
  type: DELETE_SHORTLIST_ITEM_SUCCESS,
  payload: message,
});

export const deleteShortlistItemError = error => ({
  type: DELETE_SHORTLIST_ITEM_ERROR,
  payload: error,
});
