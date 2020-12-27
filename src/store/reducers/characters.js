const { SET_CHARACTERS_LOADING, SET_CHARACTERS } = require('../consts');

const initialState = {
  loading: true,
  characters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
