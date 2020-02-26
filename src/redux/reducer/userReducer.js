import { handleActions } from "redux-actions";
import * as actionTypes from "../action/actionTypes";

const initialState = {
  data: [],
  error: ""
};

const userReducer = handleActions(
  {
    [actionTypes.USERS.SUCCESS]: (state, action) => {
      console.log(action);
      const { data } = action;
     console.log("user Reducer");
      console.log(data);
     // console.log("hhhddd");

      return {
        ...state,
        data
      };
    },

    [actionTypes.USERS.ERROR]: (state, action) => {
      console.log(action);
      const { error } = action;
      return { ...state, error };
    }
  },
  initialState
);

export default userReducer;
