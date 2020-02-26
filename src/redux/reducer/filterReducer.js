import { handleActions } from "redux-actions";
import * as actionTypes from "../action/actionTypes";

const initialState = {
  data: [],
  error: ""   
};

const filterReducer = handleActions(
  {
    [actionTypes.FILTER.HIGH_LOW]: (state, action) => {
      //console.log(action);
      const { data } = action;
     //console.log("hhhhhh"+ data);
      //console.log(data.map((item) => { return item } ).sort((a,b) => {return b.price-a.price }));
     // console.log("sorted"+action);
          const sort = data.map((item) => { return item } ).sort((a,b) => {return b.price-a.price });
         console.log("sorted"+sort);
      return {
        ...state,
        sort
      };
    },
    [actionTypes.SORT.LOW_HIGH]: (state, action) => {
      console.log(action);
      const { data } = action;
     //console.log("hhhhhh"+ data);
      //console.log(data.map((item) => { return item } ).sort((a,b) => {return b.price-a.price }));
      console.log("sorted");
         const sortByLow = data.map((item) => { return item } ).sort((a,b) => {return a.price-b.price });
         console.log(sortByLow);
      return {
        ...state,
        sortByLow
      };
    },

    [actionTypes.FILTER.ERROR]: (state, action) => {
      console.log(action);
      const { error } = action;
      return { ...state, error };
    }
  },
  initialState
);

export default sortReducer;
