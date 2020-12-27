const { SET_EPISODES, SET_EPISODES_LOADING } = require('../consts');

const initialState = {
  loading: true,
  episodes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EPISODES_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_EPISODES:
      return {
        ...state,
        episodes: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
