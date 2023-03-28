export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';

const requestStarted = () => ({
  type: REQUEST_STARTED,
});

const requestSuccessful = (param) => ({
  type: REQUEST_SUCCESSFUL,
  payload: param,
});

export const fetchAPI = (characterName) => {
  return async (dispatch) => {
    try {
      dispatch(requestStarted());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${characterName}`);
      const data = await response.json();
      dispatch(requestSuccessful(data));
    } catch(error) {
      console.error(error);
    };
  }
}
