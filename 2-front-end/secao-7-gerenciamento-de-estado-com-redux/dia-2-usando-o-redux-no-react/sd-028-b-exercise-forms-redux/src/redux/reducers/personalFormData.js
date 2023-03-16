import { PERSONAL_DATA } from '../actions';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  uf: '',
};

const personalFormData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PERSONAL_DATA: {
    return {
      ...state,
      ...action.payload,
    };
  }

  default: return state;
  }
};

export default personalFormData;
