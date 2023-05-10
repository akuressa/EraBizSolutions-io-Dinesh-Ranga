import axios from 'axios';

const FETCH_DOCTORS_REQUEST = 'FETCH_DOCTORS_REQUEST';
const FETCH_DOCTORS_SUCCESS = 'FETCH_DOCTORS_SUCCESS';
const FETCH_DOCTORS_FAILURE = 'FETCH_DOCTORS_FAILURE';

const API_URL = process.env.REACT_APP_API_URL;

const fetchDoctorsRequest = () => {
  return {
    type: FETCH_DOCTORS_REQUEST
  }
}

const fetchDoctorsSuccess = (doctors) => {
  return {
    type: FETCH_DOCTORS_SUCCESS,
    payload: doctors
  }
}

const fetchDoctorsFailure = (error) => {
  return {
    type: FETCH_DOCTORS_FAILURE,
    payload: error
  }
}

export const fetchDoctors = () => {
  return (dispatch) => {
    dispatch(fetchDoctorsRequest());
    axios.get(`${API_URL}/doctor`)
      .then(response => {
        console.log(response.data.data)
        const doctors = response.data.data;
        dispatch(fetchDoctorsSuccess(doctors));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchDoctorsFailure(errorMsg));
      })
  }
}
