import { handleActions } from "redux-actions";
import * as actionTypes from "../action/actionTypes";

const initialState = {
  data: [],
  error: ""
};

const sortReducer = handleActions(
  {
    [actionTypes.SORT.HIGH_LOW]: (state, action) => {
      console.log(action.text);
      const { data } = action;
      //console.log(data.map((item) => { return item } ).sort((a,b) => {return b.price-a.price }))
      const sort = data
        .map(item => {
          return item;
        })
        .sort((a, b) => {
          return b.price - a.price;
        });
      console.log("sorted" + sort);
      return {
        ...state,
        sort
      };
    },
    [actionTypes.SORT.LOW_HIGH]: (state, action) => {
      console.log(action);
      const { data } = action;
      console.log("sorted");
      const sortByLow = data
        .map(item => {
          return item;
        })
        .sort((a, b) => {
          return a.price - b.price;
        });
      console.log(sortByLow);
      return {
        ...state,
        sortByLow
      };
    },

    [actionTypes.SORT.ERROR]: (state, action) => {
      console.log(action);
      const { error } = action;
      return { ...state, error };
    }
  },
  initialState
);

export default sortReducer;
