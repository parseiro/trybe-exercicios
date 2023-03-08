import {Reducer} from "redux";
import {REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESS} from "../actions";


const INITIAL_STATE = {
  isFetching: false,
  imageURL: null,
  errorMessage: null,
};

export const dogReducer: Reducer = (state = INITIAL_STATE, {type, payload}) => {
  // console.log(`dogReducer`);
  switch (type) {
    default: return state;
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
        imageURL: null
      };

    case REQUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: null,
        imageURL: payload,
      }

    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
        imageURL: null,
      }
  }
};
