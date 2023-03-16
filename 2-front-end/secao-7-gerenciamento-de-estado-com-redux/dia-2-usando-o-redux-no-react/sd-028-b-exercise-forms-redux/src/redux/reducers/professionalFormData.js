import { PROFESSIONAL_DATA } from '../actions';

const INITIAL_STATE = {
  resume: '',
  role: '',
  description: '',
};

const professionalFormData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PROFESSIONAL_DATA: {
    return {
      ...state,
      ...action.payload,
    };
  }

  default: return state;
  }
};

export default professionalFormData;
