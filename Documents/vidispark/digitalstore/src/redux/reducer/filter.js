import { updateState } from "../../utils";
import {
  CREATOR_VARIFY,
  FILTER_CATAGORY,
  LIKE,
  ORDER_FILTER,
  PRICE,
  REVIEW,
  SINGLE_CATAGORY_FILTER,
} from "../action/type";
const initialState = {
  categories: [],
  type: "",
};

const filter = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FILTER_CATAGORY:
      return {
        ...state,
        categories: updateState(state.categories, payload),
      };
    case SINGLE_CATAGORY_FILTER:
      return {
        ...state,
        categories: [payload],
      };
    case ORDER_FILTER:
      return {
        ...state,
        order: payload,
      };
    case CREATOR_VARIFY:
      return {
        ...state,
        verified: payload,
      };
    case LIKE:
      return {
        ...state,
        likes: payload,
      };
    case REVIEW:
      return {
        ...state,
        reviews: payload,
      };
    case PRICE:
      return {
        ...state,
        price: payload,
      };
    default:
      return state;
  }
};
export default filter;
