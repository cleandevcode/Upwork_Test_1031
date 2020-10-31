import { GET_DATA, GETTING_DATA } from '../constants';
import Axios from 'axios';

export const getData = (role, deleted) => {
  console.log('action................');
  console.log('role->', role);
  console.log('deleted->', deleted);
  return dispatch => {
    _gettingData();
    let url = 'http://localhost:3000/searchRoles';
    Axios.get(url, { params: { role, deleted } }).then(res => {
      if (res.data) {
        if (res && res.data) {
          dispatch(_getData(res.data));
        }
      }
    });
  };
};

export const _getData = data => {
  return {
    type: GET_DATA,
    data
  };
};

export const _gettingData = () => {
  return {
    type: GETTING_DATA
  };
};
