import { REQUEST_STARTED, REQUEST_SUCCESSFUL } from '../actions';

const INITIAL_STATE = { isLoading: false, characterData: '' };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_STARTED: {
      return {
        ...state,
        isLoading: true,
        characterData: '',
      }
    }

    case REQUEST_SUCCESSFUL: {
      return {
        ...state,
        isLoading: false,
        characterData: action.payload,
      }
    }

    default: return state;
  }
};

export default reducer;