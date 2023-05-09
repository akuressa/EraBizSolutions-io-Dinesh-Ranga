const FETCH_DOCTORS_REQUEST = 'FETCH_DOCTORS_REQUEST';
const FETCH_DOCTORS_SUCCESS = 'FETCH_DOCTORS_SUCCESS';
const FETCH_DOCTORS_FAILURE = 'FETCH_DOCTORS_FAILURE';

const initialState = {
    loading: false,
    doctors: [],
    error: ''
  };
  
  const doctorReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DOCTORS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_DOCTORS_SUCCESS:
        return {
          ...state,
          loading: false,
          doctors: action.payload,
          error: ''
        }
      case FETCH_DOCTORS_FAILURE:
        return {
          ...state,
          loading: false,
          doctors: [],
          error: action.payload
        }
      default:
        return state
    }
  }
  export default doctorReducer;
  
