const { SET_ORIGIN, SET_ORIGIN_LOADING } = require('../consts');

const initialState = {
  loading: true,
  origin: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORIGIN_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ORIGIN:
      return {
        ...state,
        origin: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
