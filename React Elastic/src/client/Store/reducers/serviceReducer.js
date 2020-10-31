import { GET_DATA, GETTING_DATA } from '../constants';

const initialState = {
  data: [],
  loading: false
};

export default function ServiceReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case GETTING_DATA:
      return {
        ...state,
        loading: true
      };
    case GET_DATA:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}
