import { GET_STATE } from "../actions/types";
const initialState = {
  test: [],
  users: [],
  loading: true,
};

const test = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATE:
      return {
        ...state,
        test: action.payload,
        loading: false,
      };

    default:
      return {
       ... state,
      };
  }
};
export default test;