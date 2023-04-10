import { SET_USER } from "../action/actionType";

const INITIAL_STATE = {
  user: {
    displayName: "John Smith",
    email: "example@example.com",
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
