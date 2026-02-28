import { types } from "../types/types";

const initailState = {
  logged: false,
  user: null
};

export const authReducer = (state = initailState, action: any) => {

  switch (action.type) {

    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload
      };

    case types.logout:
      return {
        logged: false,
        user: null
      };

    default:
      return state;
  }

};