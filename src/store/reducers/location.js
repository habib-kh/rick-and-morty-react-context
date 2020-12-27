const { SET_LOCATION, SET_LOCATION_LOADING } = require('../consts');

const initialState = {
  loading: true,
  location: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
