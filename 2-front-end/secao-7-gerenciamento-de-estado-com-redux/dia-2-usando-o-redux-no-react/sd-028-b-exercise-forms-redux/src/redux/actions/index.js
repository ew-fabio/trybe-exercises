const PERSONAL_DATA = 'PERSONAL_DATA';
const PROFESSIONAL_DATA = 'PROFESSIONAL_DATA';

const personalData = (param) => ({
  type: PERSONAL_DATA,
  payload: param,
});

const professionalData = (param) => ({
  type: PROFESSIONAL_DATA,
  payload: param,
});

export { personalData, PERSONAL_DATA, professionalData, PROFESSIONAL_DATA };
