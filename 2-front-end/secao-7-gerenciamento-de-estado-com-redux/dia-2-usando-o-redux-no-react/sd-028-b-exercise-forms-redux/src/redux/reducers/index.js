import { combineReducers } from 'redux';
import personalData from './personalFormData';
import professionalData from './professionalFormData';

const rootReducer = combineReducers({
  personalData,
  professionalData,
});

export default rootReducer;
