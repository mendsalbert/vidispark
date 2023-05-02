import {
  CREATOR_VARIFY,
  FILTER_CATAGORY,
  LIKE,
  ORDER_FILTER,
  PRICE,
  REVIEW,
  SINGLE_CATAGORY_FILTER,
} from "./type";

export const catagoryfilter = (value) => (dispatch) => {
  dispatch({
    type: FILTER_CATAGORY,
    payload: value,
  });
};
export const singleCatagoryfilter = (value) => (dispatch) => {
  dispatch({
    type: SINGLE_CATAGORY_FILTER,
    payload: value,
  });
};
export const orderFilter = (value) => (dispatch) => {
  dispatch({
    type: ORDER_FILTER,
    payload: value,
  });
};
export const reviewFilter = (value) => (dispatch) => {
  dispatch({
    type: REVIEW,
    payload: value,
  });
};
export const likeFilter = (value) => (dispatch) => {
  dispatch({
    type: LIKE,
    payload: value,
  });
};
export const creatorFilter = (value) => (dispatch) => {
  dispatch({
    type: CREATOR_VARIFY,
    payload: value,
  });
};
export const priceFilter = (value) => (dispatch) => {
  dispatch({
    type: PRICE,
    payload: value,
  });
};
