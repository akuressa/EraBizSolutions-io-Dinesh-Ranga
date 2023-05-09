import axios from 'axios';

// const fetchData = () => {
//   return dispatch => {
//     axios.get('http://127.0.0.1:8000/api/doctor')
//       .then(response => {
//         console.log(response)
//         dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
//       })
//       .catch(error => {
//         console.log(error)
//         dispatch({ type: 'FETCH_DATA_ERROR', payload: error });
//       });
//   };
// };
// action types

 const FETCH_DOCTORS_REQUEST = 'FETCH_DOCTORS_REQUEST';
 const FETCH_DOCTORS_SUCCESS = 'FETCH_DOCTORS_SUCCESS';
 const FETCH_DOCTORS_FAILURE = 'FETCH_DOCTORS_FAILURE';

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
    axios.get('http://localhost:8000/api/doctor')
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
