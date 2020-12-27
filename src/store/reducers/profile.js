const { SET_PROFILE, SET_PROFILE_LOADING } = require('../consts');

const initialState = {
  loading: true,
  profile: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
