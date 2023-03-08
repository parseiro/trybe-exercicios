export const REQUEST_STARTED = "1";
export const REQUEST_SUCCESS = "2";
export const REQUEST_FAILED = "3";

const requestSuccessfull = (imgURL: string) => ({
  type: REQUEST_SUCCESS,
  payload: imgURL
});

const requestFailed = (error: string) => ({
  type: REQUEST_FAILED,
  payload: error
});

const requestStarted = () => ({
  type: REQUEST_STARTED
});

/*const fetchDogImage = () => {
  return (dispatch) => {
    dispatch(requestStarted());
    fetch("https://dog.ceo/api/breeds/imagem/random")
      .then(response => response.json())
      .then(({message}) => dispatch(requestSuccessfull(message)))
      .catch((error) => dispatch(requestFailed(error)));
  }
}*/
